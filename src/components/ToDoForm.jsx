import { useState } from "react"

// O argumento de Evento retorna todos os dados do que está acontecendo

function ToDoForm ({ addToDo }) {
    const [text, setText] = useState("");
    const [category, setCategory] = useState("");

    const handlerSubmit = (e) => {
        e.preventDefault();
        if(!text || !category) return;
        addToDo(text, category);
        setText("");
        setCategory("");
    }

    return (
        <div className="toDoForm">
            <h2>Criar Tarefa:</h2>
            <form onSubmit={handlerSubmit}>
                <input type="text" value={text} placeholder="Digite o Título" onChange={(e) => setText(e.target.value)}/>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Escolha uma Categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit">Criar Tarefa</button>
            </form>
        </div>
    )
}

export default ToDoForm