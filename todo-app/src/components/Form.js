import React from "react";

function Form({inputText, setInputText, todos, setTodos, setStatus, inputDate, setInputDate}) {

    function inputTextHandler(e) {
        setInputText(e.target.value)
    }

    function dateHandler(e) {
        setInputDate(e.target.value)
    }

    function submitHandler(e) {
        e.preventDefault()

        if(inputText && inputDate) {
            setTodos([...todos, { text: inputText, completed: false, date: inputDate, id: Math.random() * 1000 } ])
            
            setInputText("")
            setInputDate("")
        }
        else
            alert("Por favor, preencha todos os campos corretamente")
    }

    function statusHandler(e) {
        setStatus(e.target.value)
    }

    return(
        <form>
            
            <div className="inputs">
                <input type="date" name="date" value={inputDate} onChange={dateHandler} className="date"/>

                <input type="text" onChange={inputTextHandler} value={inputText} className="todo-input"/> 

                <button type="submit" onClick={submitHandler} className="todo-button"> 
                    <i className="far fa-plus-square"></i> 
                </button>
            </div>

        

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