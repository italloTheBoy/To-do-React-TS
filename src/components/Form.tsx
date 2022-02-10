import * as React from 'react';


export interface IFormProps {
  btnTxt: string;
}


export function Form ({btnTxt}: IFormProps) {

  function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Titulo:</label>
        <input type="text" name="title" placeholder="Nome da tarefa" />
      </div>    

      <div>
        <label htmlFor="difficulty">Difuculdade:</label>
        <input type="text" name="difficulty" placeholder="Difuculdade da tarefa" />
      </div>  

      <input type="submit" value={btnTxt} />
    </form>
  );
}
