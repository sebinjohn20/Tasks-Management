"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useTaskContext } from "@/app/context/TaskContext";

export default function AddNewTask() {
  const {
    openTaskDialog,
    setOpenTaskDialog,
    taskFormData,
    setTaskFormData,
    resetTaskFormData,

    handleSaveTask,
  } = useTaskContext();
  const router = useRouter();
  return (
    <Dialog
      open={openTaskDialog}
      onOpenChange={(open) => {
        setOpenTaskDialog(open);
        if (!open) resetTaskFormData();
      }}
    >
      <DialogContent
        className="
      w-[95%] sm:max-w-md md:max-w-lg 
      rounded-2xl border border-gray-800 
      bg-gray-950 text-white 
      shadow-2xl shadow-purple-900/30
      p-6 sm:p-8
    "
      >
        {/* Header */}
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Add New Task 🚀
          </DialogTitle>

          <DialogDescription className="text-gray-400 text-sm sm:text-base">
            Enter task details and manage your workflow efficiently.
          </DialogDescription>
        </DialogHeader>

        {/* Form Fields */}
        <div className="space-y-5 mt-4">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <Label className="text-gray-300">Title</Label>
            <Input
              value={taskFormData.title}
              onChange={(e) =>
                setTaskFormData({ ...taskFormData, title: e.target.value })
              }
              placeholder="Enter task title"
              className="bg-gray-900 border-gray-700 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <Label className="text-gray-300">Description</Label>
            <Input
              value={taskFormData.description}
              onChange={(e) =>
                setTaskFormData({
                  ...taskFormData,
                  description: e.target.value,
                })
              }
              placeholder="Enter description"
              className="bg-gray-900 border-gray-700 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Priority */}
            <div className="flex flex-col gap-2">
              <Label className="text-gray-300">Priority</Label>
              <select
                value={taskFormData.priority}
                onChange={(e) =>
                  setTaskFormData({ ...taskFormData, priority: e.target.value })
                }
                className="px-3 py-2 rounded-md border border-gray-700 bg-gray-900 text-white focus:ring-2 focus:ring-purple-500"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

            {/* Status */}
            <div className="flex flex-col gap-2">
              <Label className="text-gray-300">Status</Label>
              <select
                value={taskFormData.status}
                onChange={(e) =>
                  setTaskFormData({
                    ...taskFormData,
                    status: e.target.value,
                  })
                }
                className="px-3 py-2 rounded-md border border-gray-700 bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
              >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Footer */}
        <DialogFooter className="flex flex-row gap-3 mt-6">
          <DialogClose asChild>
            <Button
              onClick={() => router.push("/")}
              variant="outline"
              className="w-auto border-gray-700 hover:bg-gray-800 text-black"
            >
              Cancel
            </Button>
          </DialogClose>

          <Button
            onClick={handleSaveTask}
            type="button"
            className="
         w-auto 
          bg-gradient-to-r from-purple-500 to-blue-500 
          hover:scale-105 transition-all duration-300
          shadow-lg shadow-purple-700/30
        "
          >
            Save Task
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
