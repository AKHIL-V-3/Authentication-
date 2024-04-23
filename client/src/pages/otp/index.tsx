
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import authApi from "../../api/api"
import { useParams } from 'react-router-dom';
import { useAppSelector } from "../../lib/Redux/hooks/index";
import * as Yup from 'yup';
import { IconInfoCircle } from '@tabler/icons-react';

function OtpVerify() {

    const [error, setError] = useState("")
    const [showDiv, setShowDiv] = useState(false);
    const api = authApi()
    const user = useAppSelector((state) => state.userSlice.user)
    const navigate = useNavigate()
    const { email } = useParams();


    interface FormValues {
        otp: number | string
    }

    const formik = useFormik<FormValues>({

        initialValues: {
            otp: ""
        },

        validationSchema: Yup.object().shape({
            otp: Yup.string().min(4, "otp should be 4 numbers").max(4, "otp should be 4 numbers")
                .required('Otp is required')
        }),

        onSubmit: () => {
            handleSubmit
        }

    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        try {
            formik.submitForm();
            const otpData = {
                email,
                ...formik.values,
            }
            const response = await api.otpVerify(otpData, user)
            if (response) {
                navigate("/")
            }
        } catch (err) {
            console.log(err);
            if (err?.response?.data?.message === "Incorrect Otp") {
                setError(err?.response?.data?.message)
            }
        }
    }


    useEffect(() => {
        setShowDiv(true);
        const timeout = setTimeout(() => {
            setShowDiv(false);
        }, 5000);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(()=>{
        formik.errors.otp && setError('')
   },[formik.errors])


    return (
        <>
            <div className='xl:container'>
                <div className='w-100 h-screen xl:flex xl:justify-center xl:items-center'>
                    <div className='xl:w-5/6 xl:h-5/6 h-full w-full xl:flex'>
                        <div className='xl:w-1/2 xl:h-full h-1/2'>
                            <img className='w-full h-full xl:object-cover object-contain ' src="/assets/HD Assignment.jpg" alt="" />
                        </div>
                        <div className='xl:w-1/2 xl:h-full w-full flex justify-center xl:justify-start xl:items-center'>
                            <div className='xl:w-8/12 h-auto shadow-xl border border-grey-600  w-11/12 rounded-xl flex justify-center items-center bg-custom-white'>
                                <div className='w-10/12 h-auto pt-5 pb-5'>
                                    {showDiv && <div className='bg-green-300 flex justify-center items-center gap-3 text-sm my-4 p-3 rounded-lg text-green-900 font-semibold'>
                                        <IconInfoCircle size={20} className='text-sm' />
                                        {`otp send to ${email}`}
                                    </div>}
                                    <div className='flex justify-between items-end text-custom-purple'>
                                        <h1 className='text-3xl font-bold'>Enter the otp<span className='text-custom-red'>!</span></h1>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className='mt-5 flex flex-col gap-5'>
                                            <div>

                                                <input name="otp" type="number" value={formik.values.otp} onChange={formik.handleChange} placeholder='Enter your otp' className='appearance-none w-full outline-none border-l-0 border-r-0 border-t-0 border-b-2 p-2 text-sm' inputMode="numeric" />
                                                {/* <p className='text-red-500 text-xs'>email required</p> */}
                                                {formik.touched.otp && formik.errors.otp ? <p className='text-red-500 text-xs'>{formik.errors.otp}</p> : null}
                                                {error && <p className='text-red-500 text-xs'>{error}</p>}
                                            </div>
                                            <button type='submit' className='bg-custom-purple w-full h-12 mt-2 text-custom-white rounded-xl font-semibold text-lg'>Confirm otp</button>

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

export default OtpVerify