"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useState, useEffect } from "react";

const TaskContext = createContext(null);

const initialTaskFormData = {
  title: "",
  description: "",
  priority: "Medium",
  status: "Pending",
};

export function TaskProvider({ children }) {
  const [openTaskDialog, setOpenTaskDialog] = useState(false);
  const [taskFormData, setTaskFormData] = useState(initialTaskFormData);
  const [loading, setLoading] = useState(false);
  const [currentEditedTaskID, setCurrentEditedTaskID] = useState(null);

  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  const resetTaskFormData = () => {
    setTaskFormData(initialTaskFormData);
  };

  async function handleSubmitTask() {
    try {
      setLoading(true);

      const url = currentEditedTaskID
        ? `/api/update-task?id=${currentEditedTaskID}`
        : `/api/add-task`;

      const method = currentEditedTaskID ? "PUT" : "POST";

      const apiResponse = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskFormData),
      });

      if (!apiResponse.ok) throw new Error("Request failed");

      const result = await apiResponse.json();

      if (result?.success) {
        resetTaskFormData();
        setOpenTaskDialog(false);
        setCurrentEditedTaskID(null);
        router.refresh();
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleDeleteTask(id) {
    try {
      const res = await fetch(`/api/delete-task?id=${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Delete failed");

      const result = await res.json();
      if (result?.success) router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  function handleEditTask(task) {
    setCurrentEditedTaskID(task._id);
    setTaskFormData({
      title: task.title,
      description: task.description,
      priority: task.priority,
      status: task.status,
    });
    setOpenTaskDialog(true);
  }

  return (
    <TaskContext.Provider
      value={{
        openTaskDialog,
        setOpenTaskDialog,
        taskFormData,
        setTaskFormData,
        loading,
        handleSubmitTask,
        handleDeleteTask,
        handleEditTask,
        resetTaskFormData,
        currentEditedTaskID,
        setCurrentEditedTaskID,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export const useTaskContext = () => useContext(TaskContext);
