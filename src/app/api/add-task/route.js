import connectDB from "@/app/database/db";
import Task from "@/app/model/task";

import { taskValidationSchema } from "@/app/validation/taskSchema";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { error, value } = taskValidationSchema.validate(body);
    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.details[0].message,
        },
        {
          status: 400,
        },
      );
    }
    const newTask = await Task.create(value);
    return NextResponse.json(
      {
        success: true,
        message: "Task added Successfully",
        data: newTask,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("POST API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 },
    );
  }
}
