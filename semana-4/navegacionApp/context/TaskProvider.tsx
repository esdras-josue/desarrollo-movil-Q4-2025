import React, { useState, ReactNode } from "react";
import { Task } from "../models/Task";
import { TaskContext } from "./TaskContext";

interface Props {
  children: ReactNode;
}
export const TaskProvider = ({ children }: Props) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      status: "Pendiente",
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const updateStatus = (id: number, status: Task["status"]) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? {...t, status} : t)));
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !==id));
  };

  return (
    <TaskContext.Provider value={{ task: tasks, addTask, updateStatus, deleteTask}}>
        {children}
    </TaskContext.Provider>
  );
};