import mongoose from 'mongoose'
import { model } from "mongoose";
import { Iotp, Iuser } from '../interfaces';

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    contactmode: String,
    email: {
        type: String,
        unique: true, 
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const otpSchema = new mongoose.Schema({
    email:String,
    otp:Number,
    createdAt: { type: Date, default: Date.now, expires: 300 }
})

const User = model<Iuser>('Users', userSchema)
const Otp = model<Iotp>('otp',otpSchema)

export {User,Otp}