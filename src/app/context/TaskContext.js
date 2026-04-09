// context/TaskContext.js
"use client";
import { createContext, useContext, useState } from "react";

const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const [openTaskDialog, setOpenTaskDialog] = useState(false);

  return (
    <TaskContext.Provider value={{ openTaskDialog, setOpenTaskDialog }}>
      {children}
    </TaskContext.Provider>
  );
}

export const useTaskContext = () => useContext(TaskContext);
