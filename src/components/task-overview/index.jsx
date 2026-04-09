"use client";
import { useState } from "react";

import AddNewTask from "@/components/add-tasks";

function TaskOverView() {
  const [openTaskDialog, setOpenTaskDialog] = useState(false);

  return (
    <div className="min-h-screen flex flex-col gap-10 bg-[#0f0c29] bg-gradient-to-br from-[#0f0c29] via-purple-950 to-blue-950 p-8">
      <div>
        <AddNewTask
          openTaskDialog={setOpenTaskDialog}
          setOpenTaskDialog={setOpenTaskDialog}
        />
      </div>
    </div>
  );
}

export default TaskOverView;
