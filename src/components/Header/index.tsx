import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

import LogoIgnitePlayer from "../../assets/Logo-Ignite-Player.svg";

import styles from "./styles.module.css";

interface IProps {
  onAddTask: (title: string) => void;
}

export function Header({ onAddTask }: IProps) {
  const [title, setTitle] = useState("");

  function handleAddTask(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);

    setTitle('');
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={LogoIgnitePlayer} alt="Ignite Player" />

      <form className={styles.newTaskForm} onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={onChangeTitle}
          value={title}
        />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
