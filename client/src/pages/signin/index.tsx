import { IconEye, IconEyeOff } from '@tabler/icons-react';
import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import * as Yup from 'yup';

function SignIn() {

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const [error,setError] = useState('')

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    interface FormValues {
        email: string;
        password: string;
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            setError('')
            e.preventDefault()

            console.log(formik.values,'@@@@@@@@@@');
            

            //  const response = await api.signUp(formik.values)               
             
        } catch (error) {        
               if(error?.response?.data?.message === "User with this email already exists"){
                   setError(error?.response?.data?.message)
               }
        }
    }


    const formik = useFormik<FormValues>({

        initialValues: {

            email: '',
            password: ''
        },

        validationSchema: Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        }),

        onSubmit: handleSubmit
    })

    return (
        <>
            <div className='xl:container'>
                <div className='w-100 h-screen xl:flex xl:justify-center xl:items-center'>
                    <div className='xl:w-5/6 xl:h-5/6 h-full w-full xl:flex'>
                        <div className='xl:w-1/2 xl:h-full h-1/2'>
                            <img className='w-full h-full xl:object-cover object-contain ' src="/assets/HD Assignment (1).jpg" alt="" />
                        </div>
                        <div className='xl:w-1/2 xl:h-full w-full flex justify-center xl:justify-start xl:items-center'>
                            <div className='xl:w-8/12 h-auto shadow-xl border border-grey-600  w-11/12 rounded-xl flex justify-center items-center bg-custom-white'>
                                <div className='w-10/12 h-auto pt-5 pb-5'>
                                    <div className='flex justify-between items-end text-custom-purple'>
                                        <h1 className='text-3xl font-bold'>Fill what we know <span className='text-custom-red'>!</span></h1>
                                    </div>

                                    <form onSubmit={formik.handleSubmit}>
                                    <div className='mt-5 flex flex-col gap-5'>
                                        <div>
                                            <input type="email"  value={formik.values.email} onChange={formik.handleChange}  placeholder='Email' className='w-full outline-none border-l-0 border-r-0 border-t-0 border-b-2 p-2 text-sm' id='email' />
                                            {/* <p className='text-red-500 text-xs'>email required</p> */}
                                            {formik.touched.email && formik.errors.email ? <p className='text-red-500 text-xs'>{formik.errors.email}</p> : null}
                                        </div>
                                        <div className='relative'>
                                            <input type={showPassword ? 'text' : 'password'} value={formik.values.password} onChange={formik.handleChange} placeholder='Password' className='w-full outline-none border-l-0 border-r-0 border-t-0 border-b-2 p-2 text-sm' id='password' />
                                            {/* <p className='text-red-500 text-xs'>email required</p> */}
                                            {formik.touched.password && formik.errors.password ? <p className='text-red-500 text-xs'>{formik.errors.password}</p> : null}
                                            <div
                                                onClick={togglePasswordVisibility}
                                                className="absolute inset-y-0 right-0 px-3 flex items-center rounded-r-lg  outline-custom-purple"
                                            >
                                                {showPassword ? <IconEye className='text-custom-purple cursor-pointer' /> : <IconEyeOff className='text-custom-red cursor-pointer' />}
                                            </div>
                                        </div>
                                        <button type='submit' className='bg-custom-purple w-full h-12 mt-2 text-custom-white rounded-xl font-semibold text-lg'>Sign In</button>
                                        <button onClick={()=> navigate("/signup")} className='bg-transparent border-2 w-full h-12 mt-2 border-custom-purple text-custom-purple rounded-xl font-semibold text-lg'>Sign Up</button>
                                    </div>
                                    </form>
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