import mongoose from 'mongoose'
import { model } from "mongoose";
import { Iuser } from '../interfaces';

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    contactmode: String,
    email: String
})

const User = model<Iuser>('Users', userSchema)

export { User }