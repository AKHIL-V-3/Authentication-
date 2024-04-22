import api from './axios'

const authApi = () => {

    const signUp = async (user: object) => {
        try {

            console.log('herrrrrrrrreeeee');
            
            const response = await api.post('/signup', user)
            return response
        }catch(err){
            console.log(err,'yyyyyyyyyyyyyy');
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

            console.log('herrrrrrrrreeeee');
            
            const response = await api.post('/signup', user)
            return response
        }catch(err){
            console.log(err,'yyyyyyyyyyyyyy');
            throw err    
        }
    }

    return {
        signUp,
        otpVerify,
        signIn,
        
    }

}

export default authApi