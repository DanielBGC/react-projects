import React, { useState, useEffect } from 'react';
import './App.css';

import Form from "./components/Form"
import Card from "./components/Card"

function App() {
  const API_URL = "https://api.github.com/users/"
  
  const [username, setUsername] = useState("DanielBGC")
  const [user, setUser] = useState({})
  const [repos, setRepositores] = useState([])
  
  
  useEffect( () => {
    async function getUserData(username) {
      const response = await fetch(API_URL + username)
      const userData = await response.json()
    
      setUser( {...userData} )

      console.log(user)
    }
    getUserData(username)

    async function getRepos(username) {
      const response = await fetch(API_URL + username + "/repos")
      const repoData = await response.json()
    
      if(repoData)
        setRepositores( [...repoData] )

    }
    getRepos(username)

  }, [username] )

  return (
    <div className="App">
      <Form setUsername={setUsername} />

      <Card user={user} repos={repos} />
    </div>
  );
}

export default App;
