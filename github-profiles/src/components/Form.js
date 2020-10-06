import React from 'react'

const Form = ({setUsername}) => {
    function submitForm(e) {
        e.preventDefault()

        const searchEl = document.getElementById("search");
      
        setUsername(searchEl.value)
    
        searchEl.value = ""
      }
    
    return(
        <form id="form" onSubmit={submitForm}>
            <input type="text" id="search" placeholder="Search a github profile" />
        </form>
    )
}

export default Form