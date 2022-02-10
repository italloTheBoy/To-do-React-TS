import { FormEvent, ChangeEvent, useState, useEffect } from "react"
import styles from "./Form.module.css" 
import { ITask } from '../interfaces/Task'


export interface IFormProps {
  btnTxt: string;
}


export function Form ({btnTxt}: IFormProps) {
  const [tasks, setTasks] = useState<ITask[]>([]) 
  const [id, setId] = useState<number>(1)
  const [title, setTitle] = useState<string>('')
  const [difficulty, setDifficulty] = useState<number>(0)

  async function handleSubmit (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setId(id + 1)

    const newTask: ITask = {
      id: id,
      title: title,
      difficulty: difficulty
    }

    setTasks([...tasks, newTask])
  }

  function handleChange (event: ChangeEvent<HTMLInputElement>) {
    console.log(tasks)
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
        />
      </div>    

      <div>
        <label htmlFor="difficulty">Difuculdade:</label>
        <input 
          type="number" 
          name="difficulty" 
          placeholder="Difuculdade da tarefa" 
          onChange={handleChange} 
        />
      </div>  

      <input type="submit" value={btnTxt} />
    </form>
  );
}
