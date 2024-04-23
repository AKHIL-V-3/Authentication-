import api from './axios'

const authApi = () => {

    const signUp = async (user: object) => {
        try {
            const response = await api.post('/signup', user)
            return response
        }catch(err){
            console.log(err);
            throw err    
        }
    }

    const otpVerify = async (otp:object,user:object)=>{
        try {
            const userData = {
                  user,
                  otp
            }
            const response = await api.post('/verifyotp', userData)
            return response
        }catch(err){
            console.log(err);
            throw err    
        }
    }

    const signIn = async (user: object) => {
        try {
            const response = await api.post('/signin', user)
            return response
        }catch(err){
            console.log(err,'eeeeeee');
            throw err    
        }
    }

    const Logout = async () => {
        try {
            const response = await api.post('/logout')
            return response
        }catch(err){
            console.log(err);
            throw err    
        }
    }

    return {
        signUp,
        otpVerify,
        signIn,
        Logout
        
    }

}

export default authApi