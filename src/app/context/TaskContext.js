// context/TaskContext.js
"use client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const TaskContext = createContext(null);

const initialTaskFormData = {
  title: "",
  description: "",
  priority: "Medium", // default
  status: "Pending", // default
};
export function TaskProvider({ children }) {
  const [openTaskDialog, setOpenTaskDialog] = useState(false);
  const [taskFormData, setTaskFormData] = useState(initialTaskFormData);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);
  const resetTaskFormData = () => {
    setTaskFormData(initialTaskFormData);
  };

  async function handleSaveTask() {
    try {
      setLoading(true);
      const apiResponse = await fetch("api/add-task", {
        method: "POST",
        body: JSON.stringify(taskFormData),
      });
      const result = await apiResponse.json();
      if (result?.success) {
        resetTaskFormData();
        setOpenTaskDialog(false);
        setLoading(false);
        router.refresh();
      }
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <TaskContext.Provider
      value={{
        openTaskDialog,
        setOpenTaskDialog,
        taskFormData,
        setTaskFormData,
        resetTaskFormData,
        loading,
        setLoading,
        handleSaveTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export const useTaskContext = () => useContext(TaskContext);
