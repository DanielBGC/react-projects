import React from "react";

function Todo({todo, todos, setTodos}) {

    function completeTodo() {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {...item, completed: !item.completed}
            }
            return item
        }))
    }

    function deleteTodo() {
        setTodos(todos.filter(item => item.id !== todo.id))
    }

    return(
        <ul className="todo-list">
            {todo.date && <input type="date" className={`todo-date ${todo.completed ? "completed" : ""}`} value={todo.date} readOnly />}
            <div className="todo">
                
                <li className={`todo-item ${todo.completed ? "completed" : ""}`} >{todo.text}</li>
                <button  className="complete-btn" onClick={completeTodo}> 
                    <i className="far fa-check-square"></i> 
                </button>

                <button className="trash-btn" onClick={deleteTodo}>  
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </ul>
    )
}

export default Todo