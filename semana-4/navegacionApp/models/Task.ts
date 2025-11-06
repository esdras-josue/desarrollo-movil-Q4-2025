export interface Task {
    id: number;
    title: string;
    description: string;
    status: "Pendiente" | "En Proceso" | "Completada";
}

export interface TaskContextInterface {
    task: Task[];
    addTask: (title: string, description: string) => void;
    updateStatus: (id:number, status:Task["status"]) => void;
    deleteTask: (id:number) => void;
}