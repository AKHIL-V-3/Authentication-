import { Request, Response, NextFunction } from "express";
import repository from "../repository";
import bcrypt from 'bcrypt';
import { main } from "../lib/Mail";
import jwt from 'jsonwebtoken'
require('dotenv').config()

const controller = {

    signup: async (req: Request, res: Response): Promise<void> => {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10)
            console.log(req.body.email);
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
                const resp = await repository.signup(req.body.user)
                console.log(resp, 'qqqqqqqqqqq');

                if (resp) {
                    await repository.removeOtp(resp.email)
                    
                    // if (req.cookies[process.env.ACCESS_TOKEN!]) {
                    //     req.cookies[process.env.ACCESS_TOKEN!] = "";
                    // }

                    try {
                        const accesstoken = jwt.sign({ userId: resp._id }, process.env.TOKEN_SECRET!, { expiresIn: '365d' });
                        if (accesstoken) {
                            res.cookie(process.env.ACCESS_TOKEN!, accesstoken, {
                                path: '/',
                                expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),
                                httpOnly: true,
                                sameSite: "lax",
                                // domain: 'http://localhost:5173'
                            })

                        } else {
                            console.error('Error: accessToken is undefined');
                        }
                        

                    } catch (err) {
                        console.log(err, '3333333333333');

                    }
                }
                res.status(200).json({ message: "otp verified successfully" })
            }
        } catch (err: any) {
            console.log(err);
            res.status(500).json({ message: err.message })
        }

    },

    signin: (req: Request, res: Response): void => {
        console.log(req.body,'(((((((((((((((');




        res.send("Signin successful");




    },

    logout: (req: Request, res: Response) => {
        res.clearCookie(`${process.env.ACCESS_TOKEN}`)
        req.cookies[`${process.env.ACCESS_TOKEN}`] = "";
        res.clearCookie(`${process.env.REFRESH_TOKEN}`)
        req.cookies[`${process.env.REFRESH_TOKEN}`] = "";
        res.status(200).json({ message: "Successfully Logged Out" })
    }

};

export default controller