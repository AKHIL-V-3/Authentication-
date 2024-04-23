import React from 'react'
import authApi from '../../api/api';

function Home() {

    const api = authApi()

   const  handleLogout = async ()=>{
         await api.Logout()   
    }

    return (
        <>
             <div className='w-full'>

                 <div className='w-full h-24 bg-custom-white shadow-lg flex justify-between items-center px-12'>
                   
                     <div className='font-semibold text-2xl'>WELCOME</div>

                     <div>

                         <button onClick={handleLogout} className='bg-custom-red w-20 h-10 rounded-lg text-white font-semibold'>Logout</button>

                     </div>

                 </div>

             </div>
        </>
    )
}

export default Home