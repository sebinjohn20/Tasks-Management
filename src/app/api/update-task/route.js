import connectDB from "@/app/database/db";
import Task from "@/app/model/task";
import { taskValidationSchema } from "@/app/validation/taskSchema";
import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const taskID = searchParams.get("id");
    if (!taskID) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog ID is required",
        },
        { status: 400 },
      );
    }
    const body = await req.json();
    const { error, value } = taskValidationSchema.validate(body);
    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.details[0].message,
        },
        { status: 422 },
      );
    }
    const { title, description, priority, status } = value;
    const existingTask = await Task.findById(taskID);
    if (!existingTask) {
      return NextResponse.json(
        {
          success: false,
          message: "Task not found",
        },
        { status: 404 },
      );
    }
    const updateTask = await Task.findByIdAndUpdate(
      taskID,
      { title, description, priority, status },
      { new: true },
    );
    return NextResponse.json(
      {
        success: true,
        message: "Task updated successfully",
        data: updateTask,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 },
    );
  }
}
