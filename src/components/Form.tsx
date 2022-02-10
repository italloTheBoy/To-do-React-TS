import { FormEvent, ChangeEvent, Dispatch, useState, useEffect } from "react"
import * as React from "react"
import styles from "./Form.module.css" 
import { ITask } from '../interfaces/Task'


export interface IFormProps {
  btnTxt: string;
  tasks: ITask[];
  setTasks?: React.Dispatch<React.SetStateAction<ITask[]>>
}


export function Form ({btnTxt, tasks, setTasks}: IFormProps) {
  const [id, setId] = useState<number>(1)
  const [title, setTitle] = useState<string>('')
  const [difficulty, setDifficulty] = useState<number>(0)

  async function handleSubmit (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setId(id + 1)

    const newTask: ITask = {
      id: id,
      title: title,
      difficulty: isNaN(difficulty) ? 0 : difficulty
    }

    setTasks!([...tasks, newTask])

    setTitle('')
    setDifficulty(0)
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
