"use client"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema } from '@/constants/ValidationSchema/FormSchema'; 
import Link from 'next/link';
import { URL } from '@/constants/SiteUrl'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import PrimaryBtn from '../button/PrimaryBtn';
type FieldValues = {
    email: string;
    fullname: string;
    username: string;
    password: string;
};
export interface FormData {
    email: string;
    fullname: string;
    username: string;
    password: string;
}

export default function SignupForm() {
    const [loading, setisLoading] = useState(false)
    const router = useRouter()
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FieldValues>({
        resolver: zodResolver(userSchema),
    });

    const onSubmit = async (value: FieldValues) => {
        setisLoading(true)
        // Perform form submission logic here (e.g., sending data to server)
        await axios.post(`${URL}/api/user`, {
            email: value.email,
            fullname: value.fullname,
            username: value.username,
            password: value.password,
        })
            .then(function (response) {
                console.log(response);
                toast.success(`${response.data.message}`)
                reset()
                setisLoading(false)
                router.push("/signin")

            })
            .catch(function (error) {
                console.log(error);
                toast.error(`${error.response.data.message}`)
                setisLoading(false)
            });
    };

    return (
        <form className='px-[33px] mb-[33px] py-[33px] border border-borderClr-1 shadow-2 rounded-md w-[95%] sm:w-[440px] ' >
            <div className='mb-[12px]'>
                <label htmlFor="email" className='text-black font-bold text-sm'>Enter your email to get started</label>
                <input className='px-[15px] py-[14px] mt-[8px] w-full border border-borderClr-2 rounded-lg text-black font-normal text-[16px]' style={{ outline: "none" }} {...register("email",)} placeholder='test@gmail.com' type='email' />
                {errors.email && <p className='text-danger text-[10px] font-bold'>{errors.email.message}</p>}
            </div>
            <div className='mb-[12px]'>
                <label className='text-black font-bold text-sm' htmlFor="fullname">Enter your full name</label>
                <input className='px-[15px] py-[14px] mt-[8px] w-full border border-borderClr-2 rounded-lg text-black font-normal text-[16px]' style={{ outline: "none" }} {...register("fullname",)} placeholder='fullname' type='text' />
                {errors.fullname && <p className='text-danger text-[10px] font-bold'>{errors.fullname.message}</p>}
                {/* <Input
                    label="Enter your fullname"
                    register={register}
                    placeholder="fullname"
                    type="text"
                    fieldName="fullname"
                    errors={errors}
                    message="Error message for fullname"
                /> */}


            </div>
            <div className='mb-[12px]'>
                <label className='text-black font-bold text-sm' htmlFor="userName">Enter your username</label>
                <input className='px-[15px] py-[14px] mt-[8px] w-full border border-borderClr-2 rounded-lg text-black font-normal text-[16px]' style={{ outline: "none" }} {...register("username",)} placeholder='username' type='text' />
                {errors.username && <p className='text-danger text-[10px] font-bold'>{errors.username.message}</p>}
            </div>

            <div>
                <label className='text-black font-bold text-[12px]' htmlFor="userName">Choose a password with at least 8 characters</label>
                <input className='px-[15px] py-[14px] mt-[8px] w-full border border-borderClr-2 rounded-lg text-black font-normal text-[16px]' style={{ outline: "none" }} {...register("password")} placeholder='password' type='password' />
                {errors.password && <p className='text-danger text-[10px] font-bold'>{errors.password.message}</p>}
            </div>

            <div className='w-full h-[6px] bg-white-line my-3'></div>

            <p className='font-normal text-danger  text-[12px]'>Use a few words, avoid common phrases. No need for symbols, digits, or uppercase letters</p>

            <p className='mt-[27px] mb-[12px] font-normal text-[12px] text-center'>By creating a Calendly account, you agree to <span className='text-primary'>Calendly's Terms</span> and <span className='text-primary '>Privacy Policy</span></p>

            <div className="text-center">
                <PrimaryBtn loading={loading} onClick={handleSubmit(onSubmit)} label="Sign Up" />
            </div>

            <Link href={"/signin"} ><p className='mt-[27px]  font-normal text-[12px] text-center'>If already have an account<span className='text-primary'>SignIn</span></p></Link>
        </form>
    );
}










