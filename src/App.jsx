import { useState } from "react";

import "./App.css";

import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm";
import Search from "./components/Search";

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

  const [search, setSearch] = useState("");

  const addToDo = (text, category) => {
    const newToDo = [
      ...toDos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isComplety: false
      }
    ];

    setToDos(newToDo);
  }

  // A função filter não muda a lista original

  const removeToDo = (id) => {
    const allToDo = [...toDos];
    const filteredTodos = allToDo.filter ( (toDo) => toDo.id !== id ? toDo: null );

    setToDos(filteredTodos);
  }

  const completeToDo = (id) => {
    const allToDo = [...toDos];
    allToDo.map ( (toDo) => toDo.id === id ? toDo.isComplety = !toDo.isComplety : toDo );
    
    setToDos(allToDo);
  }

  // Função includes verifica se a está contido em b

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <div className="toDoList">
        {
          toDos.filter((toDo) => toDo.text.toLowerCase().includes(search.toLowerCase())).map((toDo) => (
            <ToDo key={toDo.id} toDo={toDo} removeToDo={removeToDo} completeToDo={completeToDo}/>
          ))
        }
      </div>
      <ToDoForm addToDo={addToDo}/>
    </div>
  )
}

export default App;