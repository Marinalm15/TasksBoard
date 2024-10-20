import { useContext } from "react";
import { TaskContext } from "../context/TasksContext";

export const useTasks = () => useContext(TaskContext)