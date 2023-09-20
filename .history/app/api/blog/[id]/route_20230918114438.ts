import { error } from "console";
import { NextResponse } from "next/server";
import { main } from "../route";
import prisma from "@/prisma";

export const GET = async (req: Request, res: NextResponse) => {
    try{
    const id = req.url.split("/blog/")[1];
    await main();
    const post = await prisma.post.findFirst({ where: { id } });
    }catch (error) {
    return NextResponse.jason({ message: "Error", error },)
    }
}

export const PUT= async (req: Request, res: NextResponse) => {}

export const DELETE = async (req: Request, res: NextResponse) => {}