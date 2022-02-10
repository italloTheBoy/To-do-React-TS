import { useState } from 'react'

import styles from './App.module.css'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Form } from './components/Form'
import { List } from './components/List'

function App() {

  return (
    <>
      <Header />

      <main className={styles.main}>
        <section>
          <h2>O que você vai fazer?</h2>
          <Form btnTxt="Criar" />
        </section>

        <section>
          <h2>Suas tarefas:</h2>
          <List />
        </section>
      </main>
    
      <Footer />
    </>
  )
}

export default App
