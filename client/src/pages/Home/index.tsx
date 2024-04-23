import  { useEffect } from 'react'
import authApi from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../lib/Redux/hooks';
import { useDispatch } from 'react-redux';
import { userActions } from '../../lib/Redux/slice/userSlice';

function Home() {

    const api = authApi()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const isLoggedIn = useAppSelector((state) => state.userSlice.isLoggedIn)

   const  handleLogout = async ()=>{
        const response =  await api.Logout()  
        if(response) {
             dispatch(userActions.Logout())
             navigate('/signin')
        }
    }

    useEffect(()=>{
        if(!isLoggedIn){
            navigate("/signin")
        }      
    },[isLoggedIn,navigate])

    return (
        <>
             <div className='w-full'>

                 <div className='w-full h-24 bg-custom-white shadow-lg flex justify-between items-center px-12'>
                   
                     <div className='font-semibold text-2xl text-custom-purple'>WELCOME <span className='text-custom-red'>!</span></div>

                     <div>
                         <button onClick={handleLogout} className='bg-custom-red w-20 h-10 rounded-lg text-white font-semibold'>Logout</button>

                     </div>

                 </div>

             </div>
        </>
    )
}

export default Home