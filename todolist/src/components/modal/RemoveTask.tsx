"use client"
import { TaskContext } from "@/contexts/TaskContext";
import styles from "./RemoveTask.module.scss";
import { useContext } from "react";



export function RemoveTask({ onClose, id }: { onClose: () => void, id: string }) {
    const { removeTask } = useContext(TaskContext);

    const handleRemoveTask = () => {
        removeTask(id);
        onClose();
    }

    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                <h1>Deletar tarefa</h1>

                <div className={styles.form}>
                    <p>Tem certeza que você deseja deletar essa tarefa?</p>
                </div>

                <div className={styles.buttons}>
                    <button onClick={handleRemoveTask} className={styles.deleteButton}>Deletar</button>
                    <button onClick={onClose} className={styles.cancelButton}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}