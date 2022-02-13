import { FormEvent, ChangeEvent, useState, useEffect } from "react"
import * as React from "react"
import styles from "./Form.module.css" 
import { ITask } from '../interfaces/Task'


export interface IFormProps {
  btnTxt: string;
  task?: ITask | null
  tasks: ITask[];
  setTasks?: React.Dispatch<React.SetStateAction<ITask[]>>
  handleUpdate? (task: ITask): void
}


export function Form ({btnTxt, task, tasks, setTasks, handleUpdate}: IFormProps) {
  const [id, setId] = useState<number>(1)
  const [title, setTitle] = useState<string>('')
  const [difficulty, setDifficulty] = useState<number>(0)

  useEffect(() => {
    if (task) {
      setId(task.id)
      setTitle(task.title)
      setDifficulty(task.difficulty)
    }
  }, [task])

  async function handleSubmit (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!handleUpdate) {
      setId(Math.floor(Math.random() * 1000))
  
      const newTask: ITask = {
        id: id,
        title: title,
        difficulty: isNaN(difficulty) ? 0 : difficulty
      }
  
      setTasks!([...tasks, newTask])
  
      setTitle('')
      setDifficulty(0)
    } 
    else {
      handleUpdate({id, title, difficulty})
    }
  }

  function handleChange (event: ChangeEvent<HTMLInputElement>) {
    if (event.target.name === 'title') {
      setTitle(event.target.value)
    }
    else {
      setDifficulty(+event.target.value)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Titulo:</label>
        <input 
          type="text" 
          name="title" 
          placeholder="Nome da tarefa" 
          onChange={handleChange} 
          value={title}
        />
      </div>    

      <div>
        <label htmlFor="difficulty">Difuculdade:</label>
        <input 
          type="number" 
          name="difficulty" 
          placeholder="Difuculdade da tarefa" 
          onChange={handleChange} 
          value={difficulty}
        />
      </div>  

      <input type="submit" value={btnTxt} />
    </form>
  );
}
