"use client";

import AddNewTask from "@/components/add-tasks";
import TaskCard from "@/components/TaskCard";

function TaskOverView({ taskList }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-purple-950 to-blue-950 p-6">
      <AddNewTask />

      <h1 className="text-3xl font-bold text-white mb-6">Your Tasks </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {taskList?.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskOverView;
