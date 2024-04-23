import { promises } from "dns";
import { User, Otp } from "../Models/usermodel";
import { Iotp, Iuser,signinUser } from "../interfaces";

const repository = {

    signup: async (user: Iuser) => {

        try {
            const existingUser = await User.findOne({ email: user.email })
            if (existingUser) {
                throw new Error("User with this email already exists");
            }
            const newUser = new User({
                firstName: user.firstName,
                lastName: user.lastName,
                password: user.password,
                contactmode: user.contactmode,
                email: user.email
            })
            const response = await newUser.save()
            console.log(response, 'User saved successfully');
            return response;

        } catch (err) {
            throw err
        }

    },

    saveOtp: async (data: Iotp) => {
        try {
            const newOtp = new Otp({
                email: data.email,
                otp: data.otp
            })
            const response = await newOtp.save()
            return response
        } catch (err) {
            console.log(err);
        }

    },

    checkUserExist: async (email: string) => {
        try {
            const existingUser = await User.findOne({ email: email })
            if (existingUser) {
                throw new Error("User with this email already exists");
            }
        } catch (err) {
            throw err
        }
    },

    verifyotp: async (otpdata: Iotp) => {
        try {
            const Otpvalue = await Otp.findOne({ email: otpdata.email })
           
             if(Otpvalue?.otp === otpdata.otp){
                  return Otpvalue
             }else{
                throw new Error("Incorrect Otp");
             }
        } catch (err) {
            console.log(err);
            throw err
        }
    },
    removeOtp:async(email:string)=>{
        try{
            const response = await Otp.deleteOne({email:email})
            return response
         }catch(err){
             console.log(err);  
         }
    },

    signIn: async(user: signinUser)=> { 
        try{
            const response = await User.findOne({email:user.email})
            return response
         }catch(err){
             console.log(err);  
         }

    }
};

export default repository
