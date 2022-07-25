import { TbClipboardText } from "react-icons/tb";
import { ITask } from "../../App";
import { TaskItem } from "../TaskItem";
import styles from "./styles.module.css";

interface IProps {
  tasks: ITask[];
  onDeleteTask: (id: string) => void;
  onCompleted: (id: string) => void;
}

export function Tasks({ tasks, onDeleteTask, onCompleted }: IProps) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </header>

      <div className={styles.taskItem}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onCompleted={onCompleted}
          />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <TbClipboardText size={50} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
