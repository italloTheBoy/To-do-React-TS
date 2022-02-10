import { ITask } from '../interfaces/Task'
import styles from './List.module.css'

export interface IListProps {
  tasks: ITask[];
  handleDelete(id: number): void
}

export function List ({tasks, handleDelete}: IListProps) {
  return (
    <>
      {tasks.map(task => (
        <article key={task.id} className={styles.task}>
          <div>
            <h3>{task.title}</h3>
            <p>Difuculdade: {task.difficulty}</p>
          </div>

          <nav>
            <i className="bi bi-pencil"></i>
            <i onClick={() => handleDelete(task.id)} className="bi bi-trash"></i>
          </nav>
        </article>
      ))}
    </>
  );
}
