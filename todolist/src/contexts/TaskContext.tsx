'use client'
import { createContext, useEffect, useState } from "react";

interface Task {
    id: string;
    title: string;
    completed: boolean;
}   

interface TaskContextType {
    tasks: Task[];
    addTask: (task: Task) => void;
    removeTask: (id: string) => void;
    updateTask: (id: string, taskProps: Task) => void;
}

export const TaskContext = createContext<TaskContextType>({
    tasks: [],
    addTask: () => {},
    removeTask: () => {},
    updateTask: () => {},
});

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const tasks = localStorage.getItem("tasks");
        if (tasks) {
            setTasks(JSON.parse(tasks));
        }
    }, []);

    const addTask = (task: Task) => {
        setTasks([...tasks, task]);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    const removeTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id));
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    const updateTask = (id: string, taskProps: Task) => {
        setTasks(tasks.map(task => task.id === id ? taskProps : task));
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask, updateTask }}>
            {children}
        </TaskContext.Provider>
    );  
}

