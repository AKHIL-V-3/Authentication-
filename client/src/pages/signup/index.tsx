import { IconChevronDown, IconChevronRight, IconEye, IconEyeOff } from '@tabler/icons-react';
import  { useState } from 'react'

function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showretypePassword, setShowretypePassword] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleretypePasswordVisibility = () => {
        setShowretypePassword(!showretypePassword);
    };



    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <>
            <div className='xl:container'>

                <div className='w-100 h-screen xl:flex xl:justify-center xl:items-center'>

                    <div className='xl:w-5/6 xl:h-5/6 h-full w-full xl:flex'>

                        <div className='xl:w-1/2 xl:h-full h-80'>

                            <img className='w-full h-full xl:object-cover object-contain ' src="/assets/HD Assignment.jpg" alt="" />

                        </div>

                        <div className='xl:w-1/2 xl:h-full w-full flex justify-center xl:justify-start xl:items-center'>

                            <div className='xl:w-8/12 h-auto shadow-xl border border-grey-600  w-11/12 rounded-xl flex justify-center items-center bg-custom-white'>

                                <div className='w-10/12 h-auto pt-5 pb-5'>
                                    <div className='flex justify-between items-end text-custom-purple'>
                                        <h1 className='text-3xl font-bold'>Let us know <span className='text-custom-red'>!</span></h1>
                                        <h3 className='text-xl font-bold underline'>Sign <span className='text-custom-red underline'>In</span></h3>
                                    </div>

                                    <div className='mt-5 flex flex-col gap-5'>
                                        <div>
                                            <input type="text" placeholder='First Name' className='w-full outline-none border-l-0 border-r-0 border-t-0 border-b-2 p-2 text-sm' />
                                            {/* <p className='text-red-500 text-xs'>email required</p> */}
                                        </div>

                                        <div>
                                            <input type="text" placeholder='Last Name' className='w-full outline-none border-l-0 border-r-0 border-t-0 border-b-2 p-2 text-sm' />
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


                                        <div className='relative'>

                                            <input type={showretypePassword ? 'text' : 'password'} placeholder='Retype Password' className='w-full outline-none border-l-0 border-r-0 border-t-0 border-b-2 p-2 text-sm' />
                                            {/* <p className='text-red-500 text-xs'>email required</p> */}
                                            <div
                                                onClick={toggleretypePasswordVisibility}
                                                className="absolute inset-y-0 right-0 px-3 flex items-center rounded-r-lg  outline-custom-purple"
                                            >
                                                {showretypePassword ? <IconEye className='text-custom-purple cursor-pointer' /> : <IconEyeOff className='text-custom-red cursor-pointer' />}
                                            </div>
                                        </div>

                                        <div className='relative'>
                                            <input type="text" placeholder='Contact Mode' className='w-full outline-none border-l-0 border-r-0 border-t-0 border-b-2 p-2 text-sm bg-custom-white' disabled />
                                            {/* <p className='text-red-500 text-xs'>email required</p> */}
                                            <div
                                                onClick={toggleExpand}
                                                className="absolute inset-y-0 right-0 px-3 flex items-center rounded-r-lg  outline-custom-purple cursor-pointer"
                                            >
                                                {!isExpanded ? <IconChevronRight /> : <IconChevronDown />}
                                            </div>

                                            {isExpanded && (
                                                <div className="absolute top-full right-3 mt-1 w-20 h-16 bg-custom-white rounded-lg shadow-lg border border-custom-purple cursor-pointer flex justify-center items-start">
                                                    <p className='p-2 text-sm font-sans'>Email</p>
                                                </div>
                                            )}

                                        </div>

                                        <div>
                                            <input type='email' placeholder='Enter Email' className='w-full outline-none border-l-0 border-r-0 border-t-0 border-b-2 p-2 text-sm' />
                                            {/* <p className='text-red-500 text-xs'>email required</p> */}
                                        </div>


                                        <button className='bg-custom-purple w-full h-12 mt-2 text-custom-white rounded-xl font-semibold text-lg'>Sign Up</button>



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

export default SignUp