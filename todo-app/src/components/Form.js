import React from "react";

function Form({inputText, setInputText, todos, setTodos, setStatus}) {

    function inputTextHandler(e) {
        setInputText(e.target.value)
    }

    function submitHandler(e) {
        e.preventDefault()

        if(inputText)
            setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 } ])
        else
            alert("Por favor, preencha o campo corretamente")

        setInputText("")
    }

    function statusHandler(e) {
        setStatus(e.target.value)
    }

    return(
        <form>
            <input type="text" onChange={inputTextHandler} value={inputText} className="todo-input"/> 

            <button type="submit" onClick={submitHandler} className="todo-button"> 
                <i className="far fa-plus-square"></i> 
            </button>
            
            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                    <option value="all">Todos</option>
                    <option value="completed">Completos</option>
                    <option value="uncompleted">Incompletos</option>
                </select>
            </div>
        </form>  
    )
}

export default Form