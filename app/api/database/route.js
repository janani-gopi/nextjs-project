import connectMongoDB from "@/app/libs/mongodb"
import Database from "@/models/database"
import { NextResponse } from "next/server"


export async function POST(request){
    const {username,email,dateofjoin,role} = await request.json()
    await connectMongoDB();
    await Database.create({username,email,dateofjoin,role})
   return NextResponse.json({message:"db created"}, {status:201})
}

export async function GET(){
    await connectMongoDB()
   const database = await Database.find()
   return NextResponse.json({database})
}