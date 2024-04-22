import { Request,Response , NextFunction } from "express"; 
import jwt from 'jsonwebtoken'
require('dotenv').config()

const secretKey = process.env.TOKEN_SECRET!; // Use the same key used to sign the token

const verifyToken = (req:Request, res:Response, next:NextFunction) => {
    const accessToken = req.cookies.accessToken
    if (!accessToken) {
        return res.status(401).json({ message: 'Token not provided' });
    }
    jwt.verify(accessToken, secretKey, (err:any, decoded:any) => {
        if (err) {
            console.log(err,"invalid token err");
            return res.status(401).json({ message: 'Token invalid or expired' });
        }
        // req.user = decoded;
        next();
    });
};

module.exports = verifyToken