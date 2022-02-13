import * as React from 'react';
import styles from './Modal.module.css'

export interface IModalProps {
  children: React.ReactNode
}

export function Modal ({ children }: IModalProps) {
  function clodeModal(event: React.MouseEvent) {
    const modal = document.querySelector('#modal')

    modal!.classList.add('hide')
  }

  return (
    <section id="modal" className="hide">
      <div className={styles.fade} onClick={clodeModal}></div>

      <main className={styles.modal}>
        <h1>Modal</h1>
        {children}
      </main>
    </section>
  );
}
