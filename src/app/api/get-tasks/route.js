import connectDB from "@/app/database/db";
import Task from "@/app/model/task";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const extractAllTaskFromData = await Task.find({});
    if (extractAllTaskFromData) {
      return NextResponse.json({
        succes: true,
        data: extractAllTaskFromData,
      });
    } else {
      return NextResponse.json({
        succes: false,
        message: "something wrong please try again",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      succes: false,
      message: "something wrong please try again",
    });
  }
}
