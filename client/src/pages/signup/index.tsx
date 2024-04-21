import { IconChevronDown, IconChevronRight, IconEye, IconEyeOff } from '@tabler/icons-react';
import { useFormik } from 'formik';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import * as Yup from 'yup';

function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showretypePassword, setShowretypePassword] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate()
    
    interface FormValues {
        firstName: string;
        lastName: string;
        password: string;
        retypePassword: string;
        contactMode: string;
        email: string;
    }
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleretypePasswordVisibility = () => {
        setShowretypePassword(!showretypePassword);
    };
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const formik = useFormik <FormValues>({

        initialValues: {

            firstName: '',
            lastName: '',
            password: '',
            retypePassword: '',
            contactMode: 'email',
            email: ''
        },

        validationSchema: Yup.object().shape({
            firstName: Yup.string().required('First Name is required'),
            lastName: Yup.string().required('Last Name is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
            retypePassword: Yup.string().oneOf([Yup.ref('password'),], "Passwords doesn't match").required('Retype Password is required'),
            contactMode: Yup.string().required('Contact Mode is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
        }),

        onSubmit: () => {
            handleSubmit
        }

    })



    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        formik.submitForm();

        console.log(formik.values,'dddddddd');
        
    }


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
                                        <h3 onClick={() => navigate("/signin")} className='text-xl cursor-pointer font-bold underline'>Sign <span className='text-custom-red underline'>In</span></h3>
                                    </div>

                                    <form onSubmit={handleSubmit}>

                                        <div className='mt-5 flex flex-col gap-5'>
                                            <div>
                                                <input type="text" value={formik.values.firstName} onChange={formik.handleChange}  placeholder='First Name' className='w-full outline-none border-l-0 border-r-0 border-t-0 border-b-2 p-2 text-sm' id="firstName" />
                                                {formik.touched.firstName && formik.errors.firstName ? <p className='text-red-500 text-xs'>{formik.errors.firstName}</p> : null}
                                                
                                            </div>

                                            <div>
                                                <input type="text" value={formik.values.lastName} onChange={formik.handleChange}  placeholder='Last Name' className='w-full outline-none border-l-0 border-r-0 border-t-0 border-b-2 p-2 text-sm' id="lastName" />
                                                {formik.touched.lastName && formik.errors.lastName ? <p className='text-red-500 text-xs'>{formik.errors.lastName}</p> : null}
                                            </div>


                                            <div className='relative'>

                                                <input type={showPassword ? 'text' : 'password'} value={formik.values.password} onChange={formik.handleChange}  placeholder='Set Password' className='w-full outline-none border-l-0 border-r-0 border-t-0 border-b-2 p-2 text-sm' id="password" />
                                                {formik.touched.password && formik.errors.password ? <p className='text-red-500 text-xs'>{formik.errors.password}</p> : null}
                                                <div
                                                    onClick={togglePasswordVisibility}
                                                    className="absolute inset-y-0 right-0 px-3 flex items-center rounded-r-lg  outline-custom-purple"
                                                >
                                                    {showPassword ? <IconEye className='text-custom-purple cursor-pointer' /> : <IconEyeOff className='text-custom-red cursor-pointer' />}
                                                </div>
                                            </div>


                                            <div className='relative'>

                                                <input type={showretypePassword ? 'text' : 'password'} value={formik.values.retypePassword} onChange={formik.handleChange}  placeholder='Retype Password' className='w-full outline-none border-l-0 border-r-0 border-t-0 border-b-2 p-2 text-sm' id="retypePassword"   />
                                                {formik.touched.retypePassword && formik.errors.retypePassword ? <p className='text-red-500 text-xs'>{formik.errors.retypePassword}</p> : null}

                                                <div
                                                    onClick={toggleretypePasswordVisibility}
                                                    className="absolute inset-y-0 right-0 px-3 flex items-center rounded-r-lg  outline-custom-purple"
                                                >
                                                    {showretypePassword ? <IconEye className='text-custom-purple cursor-pointer' /> : <IconEyeOff className='text-custom-red cursor-pointer' />}
                                                </div>
                                            </div>

                                            <div className='relative'>
                                                <input type="text" value={formik.values.contactMode} onChange={formik.handleChange}  placeholder='Contact Mode' className='w-full outline-none border-l-0 border-r-0 border-t-0 border-b-2 p-2 text-sm bg-custom-white' disabled />
                                                {formik.touched.contactMode && formik.errors.contactMode ? <p className='text-red-500 text-xs'>{formik.errors.contactMode}</p> : null}
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
                                                <input type='email' value={formik.values.email} onChange={formik.handleChange}  placeholder='Enter Email' className='w-full outline-none border-l-0 border-r-0 border-t-0 border-b-2 p-2 text-sm' id="email"  />
                                                {formik.touched.email && formik.errors.email ? <p className='text-red-500 text-xs'>{formik.errors.email}</p> : null}
                                            </div>


                                            <button type="submit" className='bg-custom-purple w-full h-12 mt-2 text-custom-white rounded-xl font-semibold text-lg'>Sign Up</button>



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

export default SignUp