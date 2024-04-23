import { Request, Response, NextFunction } from "express";
import repository from "../repository";
import bcrypt from 'bcrypt';
import { main } from "../lib/Mail";
import jwt from 'jsonwebtoken'
require('dotenv').config()

const controller = {

    signup: async (req: Request, res: Response): Promise<void> => {
        try {
            await repository.checkUserExist(req.body.email)
            const getotp = await main({ email: req.body.email })
            const otpData = {
                email: req.body.email,
                otp: parseInt(getotp)
            }
            if (getotp) {
                await repository.saveOtp(otpData)
                res.status(200).json({ email: req.body.email })
            }
        } catch (err: any) {
            res.status(500).json({ message: err.message })
        }
    },

    verifyOtp: async (req: Request, res: Response): Promise<void> => {
        try {

            const response = await repository.verifyotp(req.body.otp)

            if (response) {
                req.body.user.password = await bcrypt.hash(req.body.user.password, 10)
                const resp = await repository.signup(req.body.user)
                if (resp) {
                    await repository.removeOtp(resp.email)

                    try {
                        const accesstoken = jwt.sign({ userId: resp._id }, process.env.TOKEN_SECRET!, { expiresIn: '365d' });
                        if (accesstoken) {
                            res.cookie(process.env.ACCESS_TOKEN!, accesstoken, {
                                path: '/',
                                expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),
                                httpOnly: true,
                                sameSite: "lax",
                            })

                        } else {
                            console.error('Error: accessToken is undefined');
                        }
                    } catch (err) {
                        console.log(err);
                    }
                }
                res.status(200).json({ message: "otp verified successfully" })
            }
        } catch (err: any) {
            console.log(err);
            res.status(500).json({ message: err.message })
        }

    },

    signin: async (req: Request, res: Response) => {
        try {
            const { password, email } = req.body
            const user: any = await repository.signIn(req.body)
            if (!user) {
                res.status(400).json({ message: 'User with this Email not found' });
            }
            const passwordMatch = await bcrypt.compare(password, user.password)

            if (!passwordMatch) {
                res.status(401).json({ message: 'Wrong password' });
            }

            const accesstoken = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET!, { expiresIn: '365d' });
            if (accesstoken) {
                res.cookie(process.env.ACCESS_TOKEN!, accesstoken, {
                    path: '/',
                    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),
                    httpOnly: true,
                    sameSite: "lax",
                })

            } else {
                console.error('Error: accessToken is undefined');
            }
            res.status(200).json({ message: 'User Signin successfully' })
        } catch (err) {
            console.log(err);
        }
    },

    logout: (req: Request, res: Response) => {
        res.clearCookie(`${process.env.ACCESS_TOKEN!}`)
        res.status(200).json({ message: "Successfully Logged Out" })
    }

};

export default controller