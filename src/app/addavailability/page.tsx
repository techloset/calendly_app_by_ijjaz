"use client"
import React, { useEffect, useState } from 'react'
import { logo, progressbar, shape, speaker } from '../../../public/images'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import axios from 'axios'
import { URL } from '@/constants/SiteUrl'
import { getServerSession } from 'next-auth'
import { getSession } from 'next-auth/react'
import PrimaryBtn from '@/(components)/button/PrimaryBtn'

export const daysName: string[] = ["Sundays", "Mondays", "Tuesdays", "Wednesdays", "Thrusdays", "Fridays", "Saturdays"]
type hoursType = {
  startHour: string,
  endHour: string,
}
const timeAm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const timePm = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
const initialState: hoursType = {
  startHour: '',
  endHour: '',
}
export default function AddAvailability() {
  useEffect(() => {
    getueser()
  }, [])
  const getueser = async () => {
    const session = await getSession()
    console.log("🚀 ~ availability ~ session:", session?.user)
  }
  const router = useRouter()
  const [state, setstate] = useState(initialState)
  const [days, setDays] = useState<string[]>([]);
  const [loading, setisLoading] = useState(false)

  const handelChange = (e: any) => {
    setstate(s => ({ ...s, [e.target.name]: e.target.value }))
  }
  const handleDays = (e: React.ChangeEvent<HTMLInputElement>) => {
    const day = e.target.name;
    if (e.target.checked) {
      // If the checkbox is checked, add the day to the days array
      setDays([...days, day]);
    } else {
      // If the checkbox is unchecked, remove the day from the days array
      setDays(days.filter(item => item !== day));
    }
  };
  const handelSubmit = async () => {
    const { startHour, endHour } = state
    if (startHour == endHour) {
      return toast.error("Ending hour same as starting hour")
    }
    if (!days) {
      return toast.error("Ending hour same as starting hour")
    }

    // setstate(initialState)
    setisLoading(true)
    await axios.post(`${URL}/api/availability`, {
      startHour: startHour,
      endHour: endHour,
      days: days,
    })
      .then(function (response) {

        toast.success(`${response.data.message}`)
        // reset()
        setisLoading(false)
        router.push("/")

      })
      .catch(function (error) {
        console.log(error.response.data.message);
        toast.error(`${error.response.data.message}`)
        setisLoading(false)
      });
  }
  return (

    <div className="flex justify-center items-center flex-col w-full">
      <Image src={logo} alt="Logo" className='w-[182px] h-[48px] mt-[12px] mb-[40px]' />
      <form className='border border-borderClr-1 shadow-2 rounded-md w-[95%] sm:w-[645px]' >
        <div className='flex justify-between items-center border-b border-borderClr-1'>
          <div className='mx-6 my-8'>
            <p className='text-black font-bold text-[18px] mb-6'>Set your availability</p>
            <p className='text-black font-normal text-[14px]'>Let Calendly know when you're typically available to
              accept meetings.</p>
          </div>
          <Image src={shape} alt="..." className='w-[185px] h-[162px]' />

        </div>
        <div className='mx-6 mb-6 mt-8'>
          <p className='text-black font-bold text-sm'>Available hours</p>
          <div className="flex flex-wrap gap-[38px]">
            <div >
              <select className='px-[17px] py-[13px] mt-[8px] w-[278px] border border-borderClr-2 rounded-lg text-black font-normal text-[16px]' style={{ outline: "none" }} name='startHour' onChange={handelChange}>
                {
                  timeAm.map((value, i) => {
                    return (
                      <option key={i} value={value}> {value}:00 am</option>
                    )
                  })
                }
                {
                  timePm.map((value, i) => {
                    return (
                      <option key={i} value={value}> {value - 12}:00 pm</option>
                    )
                  })
                }
              </select>

            </div>
            <div>
              <select className='px-[15px] py-[14px] mt-[8px] w-[278px] border border-borderClr-2 rounded-lg text-black font-normal text-[16px]' style={{ outline: "none" }} name='endHour' onChange={(e) => handelChange(e)}>
                {
                  timeAm.map((value, i) => {
                    return (
                      <option key={i} value={value}> {value}:00 am</option>
                    )
                  })
                }
                {
                  timePm.map((value, i) => {
                    return (
                      <option key={i} value={value}> {value - 12}:00 pm</option>
                    )
                  })
                }
              </select>
            </div>
          </div>
          <div className='mt-5'>
            <p className='text-black font-bold text-sm'>Available days</p>

            <div className='flex flex-wrap border-y border-l border-borderClr-1 rounded-md mt-2'>
              {
                daysName.map((item, i) => {
                  return (
                    <div className='flex flex-col justify-center items-center border-r border-borderClr-1' key={i}>
                      <input type='checkbox' name={item} className='w-4 h-4 my-2 mx-[34px] border border-borderClr-2 rounded-lg text-black font-normal text-[16px]' style={{ outline: "none" }} onChange={(e) => handleDays(e)} />
                      <label className='text-black font-normal text-[11px] mb-2'>{item}</label>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className='flex justify-center items-center mt-14'>
            <Image src={speaker} alt="..." className='w-4 h-4' />
            <p className='text-black font-normal text-[14px] ms-2'>Don't worry! You'll be able to further customize your availability later on.</p>
          </div>
        </div>
      </form>
      <div className='flex justify-between items-center mt-14 w-[95%] sm:w-[645px]'>
        <Image src={progressbar} alt="..." className='w-[100px] h-[10px]' />
        <div className='flex justify-end items-center gap-1'>
          <button className='text-black bg-white border-none px-[17px] py-[11px]'>Set up later</button>
          <PrimaryBtn loading={loading} onClick={handelSubmit} label="Set Now" />
        </div>
      </div>
    </div>

  )
}
