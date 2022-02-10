import { useState } from 'react'
import styles from './App.module.css'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Form } from './components/Form'
import { List } from './components/List'

import { ITask } from './interfaces/Task'

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]) 

  function handleDelete(id: number) {
    setTasks(tasks.filter(task => {
      return task.id !== id
    }))
  }

  return (
    <>
      <Header />

      <main className={styles.main}>
        <section>
          <h2>O que você vai fazer?</h2>
          <Form btnTxt="Criar" tasks={tasks} setTasks={setTasks} />
        </section>

        <section>
          <h2>Suas tarefas:</h2>
          <List tasks={tasks} handleDelete={handleDelete} />
        </section>
      </main>
    
      <Footer />
    </>
  )
}

export default App
