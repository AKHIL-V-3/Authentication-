import { Document } from "mongoose"

export interface Iuser{
    firstName:string,
    lastName:string,
    password:string,
    retypepassword:string,
    contactmode:string,
    email:string
}

export interface Iotp{
       email:string,
       otp:number,  
}