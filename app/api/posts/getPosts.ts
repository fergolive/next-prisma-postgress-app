
import { NextRequest,NextResponse } from "next/server";
import prisma from '../../../prisma/client'

export async function GET(req:NextRequest,res:NextResponse){
   try {
    /* const data = await prisma.post.findMany();
    console.log(data); */
      return NextResponse.json({'message':'DEL products & INSERT collection'})

   } catch (error) {

   return NextResponse.json({'message':error})

   }

}

/* 
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/client'



 export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse
){
    try {
        const data = await prisma.post.findMany();
        console.log(data);
        
        

    } catch (error) {
        
        res.status(500).json({ error: 'failed to load data' })

    }
} 

*/