"use client"

import { useContext, useEffect, useState } from "react";
import styles from "./Main.module.scss";
import Image from 'next/image';
import { TaskContext } from "@/contexts/TaskContext";
import { RemoveTask } from "./modal/RemoveTask";

interface Task {
    id: string;
    title: string;
    completed: boolean;
}

export function Main() {
    // pegar tarefas do localStorage
    const [uncompletedTasks, setUncompletedTasks] = useState<Task[]>([]);
    const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
    const { tasks, updateTask } = useContext(TaskContext);
    const [isModalRemoveTaskOpen, setIsModalRemoveTaskOpen] = useState(false);
    const [taskId, setTaskId] = useState("");

    useEffect(() => {
        setUncompletedTasks(tasks.filter(task => !task.completed));
        setCompletedTasks(tasks.filter(task => task.completed));
    }, [tasks]);

    const handleUpdateTask = (id: string, taskProps: Task) => {
        updateTask(id, taskProps);
    }

    const openModalRemoveTask = (id: string) => {
        setIsModalRemoveTaskOpen(true);
        setTaskId(id);
    }

    return (
        <main className={styles.main}>
            <p>Suas tarefas de hoje.</p>

            <div className={styles.tasks}>
                {uncompletedTasks.length == 0 ? (
                    <div className={styles.notTasks}>
                        <span>Nenhuma tarefa adicionada.</span>
                    </div>

                ) : (
                    uncompletedTasks.map((task) => (
                        <div className={styles.task} key={task.id}>
                            <div className={styles.taskContent}>
                                <div className={styles.checkbox} onClick={() => handleUpdateTask(task.id, { ...task, completed: !task.completed })}>
                                </div>
                                <label htmlFor={task.id}>
                                    <span>
                                        {task.title}
                                    </span>
                                </label>
                            </div>
                            <button onClick={() => openModalRemoveTask(task.id)}><Image src="/trash.svg" alt="Lixeira" width={18} height={20} /></button>
                        </div>
                    ))
                )}
            </div>

            <p>Tarefas finalizadas</p>


            <div className={`${styles.tasks} ${styles.completedTasks}`}>
                {completedTasks.length == 0 ? (
                    <div className={styles.notTasks}>
                        <span>Nenhuma tarefa finalizada.</span>
                    </div>
                ) : (
                    completedTasks.map((task) => (
                        <div className={styles.task} key={task.id}>
                            <div className={styles.taskContent}>
                                <div className={styles.checkbox} onClick={() => handleUpdateTask(task.id, { ...task, completed: !task.completed })}>
                                    <Image src="/check.svg" alt="Check" width={18} height={12} />
                                </div>
                                <label htmlFor="task-2">
                                    <span>
                                        {task.title}
                                    </span>
                                </label>
                            </div>
                            <button onClick={() => openModalRemoveTask(task.id)}><Image src="/trash.svg" alt="Lixeira" width={18} height={20} /></button>
                        </div>
                    ))
                )}
            </div>

              {isModalRemoveTaskOpen && <RemoveTask onClose={() => setIsModalRemoveTaskOpen(false)} id={taskId}/>}  

        </main>
    )
}