

function ToDo ({ toDo }) {
    return (
        <div className="toDo">
            <div className="content">
                <p className="category">{toDo.text}</p>
                <p className="category">{toDo.category}</p>
            </div>
            <div>
                <button className="complete">Feito!</button>
                <button className="remove">X</button>
            </div>
        </div>
    )   
}

export default ToDo