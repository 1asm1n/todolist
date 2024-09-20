"use client";

import { Header } from "@/components/Header";
import styles from "./page.module.scss";
import { Main } from "@/components/Main";
import { AddTask } from "@/components/modal/AddTask";
import { useState } from "react";

export default function Home() {
  const [isModalAddTaskOpen, setIsModalAddTaskOpen] = useState(false);

  return (
    <div className={styles.page}>


      <Header />
      <Main />
      <button className={styles.addTask} onClick={() => setIsModalAddTaskOpen(true)}>
        Adicionar nova tarefa
      </button>


      {isModalAddTaskOpen && <AddTask onClose={() => setIsModalAddTaskOpen(false)} />}  

    </div>
  );
}
