import prisma from "@/config/prisma"
import { availabilitySchema } from "@/constants/ValidationSchema/availabilitySchema"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { startHour, endHour ,days   } = availabilitySchema.parse(body)
        console.log("🚀 ~ POST ~ body:", startHour, endHour ,days )
        // chack email already exiest
       
        const newUser = await prisma.availability.create({
            data: {
                startHour:startHour, endHour:endHour ,days:days,
            },
        })
        return NextResponse.json({  message: "add availability successfuly" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({  message: "something went wrong" }, { status: 500 })
    }
}