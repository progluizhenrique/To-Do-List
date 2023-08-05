import { useState } from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm";

// Em react todo objeto de uma lista do estado deve ter uma chave primária

function App () {
  const [toDos, setToDos] = useState([
    {
      id: 1,
      text: "Criar trabalho x no sistema",
      category: "Trabalho",
      isComplety: false
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Academia",
      isComplety: false
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isComplety: false
    }
  ]);



  const addToDo = (text, category) => {
    const newToDo = [
      ...toDos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isComplety: false
      }
    ]

    setToDos(newToDo);
  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="toDoList">
        {
          toDos.map((toDo) => (
            <ToDo key={toDo.id} toDo={toDo}/>
          ))
        }
      </div>
      <ToDoForm addToDo={addToDo}/>
    </div>
  )
}

export default App;