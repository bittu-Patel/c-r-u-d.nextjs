import { error } from "console";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: NextResponse) => {
    try{
    const id = req.url.split("/blog/")[1];
    await main
    }catch (error) {

    }
}

export const PUT= async (req: Request, res: NextResponse) => {}

export const DELETE = async (req: Request, res: NextResponse) => {}