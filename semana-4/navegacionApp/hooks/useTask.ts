import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

export default function useTask() {
    const context = useContext(TaskContext);
    if(!context) throw new Error("useTask debe usarse dentro del provider");
    return context;
};