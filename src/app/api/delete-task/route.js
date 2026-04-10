import connectDB from "@/app/database/db";
import Task from "@/app/model/task";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const getCurentTaskID = searchParams.get("id");
    if (!getCurentTaskID) {
      return NextResponse.json({
        success: false,
        message: "Task ID is Required",
      });
    }
    const deleteCurrentTaskByID = await Task.findByIdAndDelete(getCurentTaskID);
    if (deleteCurrentTaskByID) {
      return NextResponse.json({
        success: true,
        message: "Task is deleted successfully",
      });
    }
    return NextResponse.json({
      success: false,
      message: "something went wrong! Please try again",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "something went wrong! Please try again",
    });
  }
}
