import { createContext, ReactNode, useCallback, useState } from "react";
import { apiPrivate } from "../api/axios";

interface Task {
    id: number;
    title: string;
    description: string;
    status: 'todo' | 'in_progress' | 'done';
}

interface CreateTaskData {
    title: string;
    description: string;
    status: 'todo' | 'in_progress' | 'done';
}

interface UpdateTaskStatusData {
    status: 'todo' | 'in_progress' | 'done';
    title: string;
    description: string;
}

interface TaskContextType {
    tasks: Task[];
    fetchTasks: () => Promise<Task[]>;
    createTask: (data: CreateTaskData) => Promise<Task>;
    deleteTask: (id: number) => Promise<void>;
    updateTaskStatus: (id: number, data: UpdateTaskStatusData) => Promise<Task>;
    openChat: { id: number, isOpen: boolean }
    setOpenChat: React.Dispatch<React.SetStateAction<{ id: number, isOpen: boolean }>>
}

interface TaskContextProviderProps {
    children: ReactNode;
}

export const TaskContext = createContext<TaskContextType>({} as TaskContextType);

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [openChat, setOpenChat] = useState({ id: 0, isOpen: false })
    const [tasks, setTasks] = useState<Task[]>([]);

    const fetchTasks = useCallback(async () => {
        const response = await apiPrivate.get<Task[]>("/tasks");
        setTasks(response.data);
        return response.data;
    }, []);

    const createTask = useCallback(async (data: CreateTaskData): Promise<Task> => {
        const response = await apiPrivate.post<Task>('/tasks', data);
        setTasks((prevTasks) => [...prevTasks, response.data]);
        return response.data;
    }, []);

    const deleteTask = useCallback(async (id: number) => {
        try {
            await apiPrivate.delete(`/tasks/${id}`);
            setTasks(prevTasks => prevTasks.filter(task => task.id !== id)); // Remove localmente após deletar
        } catch (error) {
            console.error("Erro ao deletar tarefa:", error);
        }
    }, []);

    const updateTaskStatus = useCallback(async (id: number, data: { title: string, description: string, status: 'todo' | 'in_progress' | 'done' }): Promise<Task> => {
        try {
            // Atualiza a tarefa enviando todos os campos (título, descrição e status)
            const response = await apiPrivate.put<Task>(`/tasks/${id}`, data);

            // Atualiza o estado local para refletir a mudança
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === id ? { ...task, ...response.data } : task
                )
            );
            return response.data;
        } catch (error) {
            console.error("Erro ao atualizar o status da tarefa:", error);
            throw error;
        }
    }, []);



    return (
        <TaskContext.Provider
            value={{
                tasks,
                fetchTasks,
                createTask,
                deleteTask,
                updateTaskStatus,
                openChat,
                setOpenChat
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}
