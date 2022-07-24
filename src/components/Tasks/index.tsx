import { TaskItem } from '../TaskItem';
import styles from './styles.module.css';

export function Tasks() {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>05</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>2 de 05</span>
        </div>
      </header>

      <div className={styles.taskItem}>
        <TaskItem />
        <TaskItem />
      </div>
    </section>
  )
}