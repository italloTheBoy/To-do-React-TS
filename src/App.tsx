import { useState } from 'react'
import styles from './App.module.css'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Modal } from './components/Modal'
import { Form } from './components/Form'
import { List } from './components/List'

import { ITask } from './interfaces/Task'


function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [tasksEdit, setTasksEdit] = useState<ITask | null>(null)

  function handleDelete(id: number) {
    setTasks(tasks.filter(task => {
      return task.id !== id
    }))
  }

  function hideOrShow(display: 'hide' | 'show') {
    const modal = document.querySelector('#modal')

    if (display == 'show') {
      modal!.classList.remove('hide')
    } 
    else {
      modal!.classList.add('hide')
    }
  }

  function handleEdit(task: ITask) {
    setTasksEdit(task)
    hideOrShow('show')
  }

  function handleUpdate({id, title, difficulty}: ITask) {
    const task: ITask = {
      id: id,
      title: title,
      difficulty: difficulty,
    }

    const updated = tasks.map(data => task.id === data.id ? task : data)

    setTasks(updated)

    hideOrShow('hide')
  }

  return (
    <>
      <Modal children={<Form btnTxt="Editar" tasks={tasks} task={tasksEdit} handleUpdate={handleUpdate} />} />
      <Header />

      <main className={styles.main}>
        <section>
          <h2>O que você vai fazer?</h2>
          <Form btnTxt="Criar" tasks={tasks} setTasks={setTasks} />
        </section>

        <section>
          <h2>Suas tarefas:</h2>
          <List tasks={tasks} handleDelete={handleDelete} handleEdit={handleEdit}/>
        </section>
      </main>
    
      <Footer />
    </>
  )
}

export default App
