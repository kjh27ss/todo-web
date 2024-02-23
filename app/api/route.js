import dbConnect from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request){
    const { title, description } = await request.json();
    await dbConnect(); //db접속
    await Topic.create({ title, description });
    return NextResponse.json({ message : "글을 입력했습니다."}, {status : 201});
}

export async function GET(){ // req 할거 없음
    await dbConnect();
    // 조회
    const topics = await Topic.find();
    return NextResponse.json({ topics });
}