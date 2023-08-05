

function ToDo ({ toDo, removeToDo, completeToDo }) {
    return (
        <div className="toDo" style={{textDecoration: toDo.isComplety ? "line-through" : ""}}>
            <div className="content">
                <p className="category">{toDo.text}</p>
                <p className="category">{toDo.category}</p>
            </div>
            <div className="buttons">
                <button className="complete" onClick={() => completeToDo(toDo.id)}>Feito!</button>
                <button className="remove" onClick={() => removeToDo(toDo.id)}>X</button>
            </div>
        </div>
    )   
}

export default ToDo