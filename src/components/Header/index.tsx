import {AiOutlinePlusCircle} from 'react-icons/ai';

import LogoIgnitePlayer from "../../assets/Logo-Ignite-Player.svg";

import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={LogoIgnitePlayer} alt="Ignite Player" />

      <form className={styles.newTaskForm}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
