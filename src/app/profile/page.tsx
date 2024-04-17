
"use client"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { profileSchema, userSchema } from '@/constants/ValidationSchema/FormSchema';
import Link from 'next/link';
import { URL } from '@/constants/SiteUrl'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import DefaultLayout from '@/(components)/Layouts/DefaultLayout'
import { authOptions } from '@/constants/authProvider'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import React from 'react'
import { user } from '../../../public/images'
export const languages = ["english", "urdu", "punjabi", "roman"]
interface FormData {
  fullname: string,
  message: string,
  language: string,
  dateFormate: string,
  timeFormate: string,
  country: string,
  timeZone: string,
}

export default function Profile() {
  const [loading, setisLoading] = useState(false)
  const router = useRouter()
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = (value: FormData) => {
    console.log("🚀 ~ onSubmit ~ value:", value)
    // setisLoading(true)
    // await axios.post(`${URL}/api/user`, {
    //   fullname: value.fullname,
    // })
    //   .then(function (response) {
    //     console.log(response);
    //     toast.success(`${response.data.message}`)
    //     reset()
    //     setisLoading(false)
    //     router.push("/signin")

    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     toast.error(`${error.response.data.message}`)
    //     setisLoading(false)
    //   });

    reset()
  };

  return (
    <DefaultLayout>
      <form onSubmit={handleSubmit(onSubmit)} className='w-[100%] sm:w-[75%]'>
        <p className='text-lightBlack font-semibold text-3xl mb-4'>account details</p>
        <p className='text-black font-bold text-5xl mb-7'>Profile</p>
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-12 mb-5">
          <Image className=" h-32 w-32 rounded-full ring-2 ring-white" src={user} alt="" />
          <div className='text-center sm:text-start'>
            <button className='text-black font-normal text-lg bg-white-default border-2 border-black rounded-[40px]  px-[17px] py-[11px] mb-2'>Upload picture</button>
            <p className='text-lightBlack font-normal text-lg'>JPG, GIF or PNG Max size of 5MB</p>
          </div>
        </div>
        <div>
          <div className='mb-7'>
            <label htmlFor="email" className='text-black font-extrabold text-sm'>Name </label>
            <input className='px-[15px] py-[14px] mt-[8px] w-full border border-borderClr-2 rounded-lg text-black font-normal text-[16px] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1' style={{ outline: "none" }} {...register("fullname",)} placeholder="" type='text' />
            {errors.fullname && <p className='text-danger text-[10px] font-bold'>{errors.fullname.message}</p>}
            <p></p>
          </div>
          <div className='mb-7'>
            <label className='text-black font-extrabold text-sm' htmlFor="message">Welcome message </label>
            <textarea className='px-[15px] py-[14px] mt-[8px] w-full border border-borderClr-2 rounded-lg text-black font-normal text-[16px] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1' style={{ outline: "none" }} {...register("message",)} placeholder='Type message here.' rows={4}></textarea>
            {errors.message && <p className='text-danger text-[10px] font-bold'>{errors.message.message}</p>}
          </div>
          <div className="mb-7">
            <span className="mr-3 text-black font-extrabold text-sm">Language</span>
            <div className=" flex flex-wrap sm:flex-nowrap justify-between items-center gap-6">
              <div className="relative w-full">
                <select className="appearance-none w-full  border-gray-300 py-2 pl-3 pr-10 border border-borderClr-2 rounded-lg text-black font-normal text-[16px] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1" {...register("language",)}>
                  <option defaultValue={""}>Choice language</option>
                  {
                    languages.map((val, i) => {
                      return (
                        <option value={val}>{val}</option>
                      )
                    })
                  }

                </select>
                <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-chevron-down"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </div>
            </div>
            {errors.language && <p className='text-danger text-[10px] font-bold '>{errors.language.message}</p>}
          </div>


          <div className=" flex flex-wrap sm:flex-nowrap justify-between items-center gap-6 mb-7">
            <div className='w-full'>
              <span className="mr-3 text-black font-extrabold text-sm">Date Formate</span>
              <div className="relative ">
                <select className="appearance-none w-full  border-gray-300 py-2 pl-3 pr-10 border border-borderClr-2 rounded-lg text-black font-normal text-[16px] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1" {...register("dateFormate",)}>
                  <option defaultValue={""}>Choice date formate</option>
                  {
                    languages.map((val, i) => {
                      return (
                        <option value={val}>{val}</option>
                      )
                    })
                  }
                </select>
                <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-chevron-down"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </div>
              {errors.dateFormate && <p className='text-danger text-[10px] font-bold '>{errors.dateFormate.message}</p>}
            </div>
            <div className='w-full'>
              <span className="mr-3 text-black font-extrabold text-sm">Time Formate</span>
              <div className="relative ">
                <select className="appearance-none  w-full  border-gray-300 py-2 pl-3 pr-10 border border-borderClr-2 rounded-lg text-black font-normal text-[16px] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1" {...register("timeFormate",)}>
                  <option defaultValue={""}>Choice time formate</option>
                  {
                    languages.map((val, i) => {
                      return (
                        <option value={val}>{val}</option>
                      )
                    })
                  }
                </select>
                <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-chevron-down"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </div>
              {errors.timeFormate && <p className='text-danger text-[10px] font-bold '>{errors.timeFormate.message}</p>}
            </div>
          </div>
          <div className="mb-7">

            <span className="mr-3 text-black font-extrabold text-sm">Country</span>
            <div className=" flex flex-wrap sm:flex-nowrap justify-between items-center gap-6">
              <div className="relative w-full">
                <select className="appearance-none w-full  border-gray-300 py-2 pl-3 pr-10 border border-borderClr-2 rounded-lg text-black font-normal text-[16px] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1" {...register("country",)}>
                  <option defaultValue={""}>Choice country</option>
                  {
                    languages.map((val, i) => {
                      return (
                        <option value={val}>{val}</option>
                      )
                    })
                  }
                </select>
                <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-chevron-down"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </div>
            </div>
            {errors.country && <p className='text-danger text-[10px] font-bold '>{errors.country.message}</p>}
          </div>
          <span className="mr-3 text-black font-extrabold text-sm">Time Zone</span>
          <div className="mb-7">
            <div className=" flex flex-wrap sm:flex-nowrap justify-between items-center gap-6 ">
              <div className="relative w-full">
                <select className="appearance-none w-full  border-gray-300 py-2 pl-3 pr-10 border border-borderClr-2 rounded-lg text-black font-normal text-[16px] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1" {...register("timeZone",)}>
                  <option defaultValue={""}>Choice time zone</option>
                  {
                    languages.map((val, i) => {
                      return (
                        <option value={val}>{val}</option>
                      )
                    })
                  }
                </select>
                <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-chevron-down"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </div>
            </div>
            {errors.timeZone && <p className='text-danger text-[10px] font-bold '>{errors.timeZone.message}</p>}
          </div>
          <div className="w-[70%] sm:w-[440px]">
            {loading ?
              <button type="button" className=" text-white-default bg-primary rounded-[40px] px-[17px] py-[11px]" disabled>
                loading...
              </button>
              : <button type="submit" className='  text-white-default bg-primary rounded-[40px] px-[17px] py-[11px]  '>Sign Up</button>

            }
          </div>
        </div>
      </form>
    </DefaultLayout>
  );
}



