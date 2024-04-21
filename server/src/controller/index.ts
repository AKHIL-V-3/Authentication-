import { Request, Response, NextFunction } from "express";

const controller = {

    signup: (req: Request, res: Response): void => {
        console.log(req.body);
        res.send("Signup successful");
    },

    signin: (req: Request, res: Response): void => {
        console.log(req.body);
        res.send("Signin successful");
    }
};

export default controller