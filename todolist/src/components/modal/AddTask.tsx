"use client"
import { TaskContext } from "@/contexts/TaskContext";
import styles from "./AddTask.module.scss";
import { useContext, useState } from "react";



export function AddTask({ onClose }: { onClose: () => void }) {
    const [title, setTitle] = useState("");
    const { tasks, addTask } = useContext(TaskContext);

    const updateInputValue = (value: string) => {
        setTitle(value);
    }

    const handleAddTask = () => {
        if(title.length == 0) return;
        if(tasks.some(task => task.title === title)) return;
        addTask({ id: (tasks.length + 1).toString(), title: title, completed: false });
        onClose();
    }

    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                <h1>Nova tarefa</h1>

                <div className={styles.form}>
                    <p>Título</p>
                    <input type="text" value={title} onChange={(e) => updateInputValue(e.target.value)} placeholder="Digite o título da tarefa" />
                </div>

                <div className={styles.buttons}>
                    <button onClick={onClose}>Cancelar</button>
                    <button onClick={handleAddTask} className={styles.addButton}>Adicionar</button>
                </div>
            </div>
        </div>
    )
}