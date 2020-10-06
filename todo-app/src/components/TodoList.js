import React from "react";

import Todo from "./Todo"

function TodoList({todos, setTodos, filteredTodos}) {

    return(
        <div className="todo-container">
            { 
                filteredTodos.map(todo => (
                    <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
                ))
            }
        </div>
    )
}

export default TodoList