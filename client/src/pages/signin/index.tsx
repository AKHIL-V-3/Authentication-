import { IconEye, IconEyeOff } from '@tabler/icons-react';
import React, { useState } from 'react'

function SignIn() {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

  return (
    <>
       <div className='xl:container'>

<div className='w-100 h-screen xl:flex xl:justify-center xl:items-center'>

    <div className='xl:w-5/6 xl:h-5/6 h-full w-full xl:flex'>

        <div className='xl:w-1/2 xl:h-full h-80'>

            <img className='w-full h-full xl:object-cover object-contain ' src="/assets/HD Assignment (1).jpg" alt="" />

        </div>

        <div className='xl:w-1/2 xl:h-full w-full flex justify-center xl:justify-start xl:items-center'>

            <div className='xl:w-8/12 h-auto shadow-xl border border-grey-600  w-11/12 rounded-xl flex justify-center items-center bg-custom-white'>

                <div className='w-10/12 h-auto pt-5 pb-5'>
                    <div className='flex justify-between items-end text-custom-purple'>
                        <h1 className='text-3xl font-bold'>Fill what we know <span className='text-custom-red'>!</span></h1>
                    </div>

                    <div className='mt-5 flex flex-col gap-5'>
                        <div>
                            <input type="email" placeholder='Email' className='w-full outline-none border-l-0 border-r-0 border-t-0 border-b-2 p-2 text-sm' />
                            {/* <p className='text-red-500 text-xs'>email required</p> */}
                        </div>


                        <div className='relative'>

                            <input type={showPassword ? 'text' : 'password'} placeholder='Set Password' className='w-full outline-none border-l-0 border-r-0 border-t-0 border-b-2 p-2 text-sm' />
                            {/* <p className='text-red-500 text-xs'>email required</p> */}
                            <div
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 px-3 flex items-center rounded-r-lg  outline-custom-purple"
                            >
                                {showPassword ? <IconEye className='text-custom-purple cursor-pointer' /> : <IconEyeOff className='text-custom-red cursor-pointer' />}
                            </div>
                        </div>

                        <button className='bg-custom-purple w-full h-12 mt-2 text-custom-white rounded-xl font-semibold text-lg'>Sign In</button>

                        <button className='bg-transparent border-2 w-full h-12 mt-2 border-custom-purple text-custom-purple rounded-xl font-semibold text-lg'>Sign Up</button>

                    </div>



                </div>

            </div>

        </div>

    </div>

</div>

</div>
    </>
  )
}

export default SignIn