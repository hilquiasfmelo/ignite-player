import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ITask } from "../../App";

import styles from "./styles.module.css";

interface IProps {
  task: ITask;
  onDeleteTask: (id: string) => void;
  onCompleted: (id: string) => void;
}

export function TaskItem({ task, onDeleteTask, onCompleted }: IProps) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onCompleted(task.id)}
      >
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>

      <button
        className={styles.deleteButton}
        onClick={() => onDeleteTask(task.id)}
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}
