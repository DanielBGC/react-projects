import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const API_URL = "https://api.github.com/users/"
  
  const [username, setUsername] = useState("DanielBGC")
  const [user, setUser] = useState({})
  const [repos, setRepositores] = useState([])
  
  function submitForm() {
    const searchEl = document.getElementById("search");
  
    setUsername(searchEl.value)

    searchEl.value = ""
  }

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
        
      console.log(repos)
    }
    getRepos(username)

  }, [username] )

  return (
    <div className="App">
      <form id="form" onSubmit={ (e) => {
        e.preventDefault()
        submitForm()
      }}>
        <input type="text" id="search" placeholder="Search a github profile" />
      </form>

      {user && 
        <main id="main">
          <div className="card">
              <div>
                  <a href={user.html_url} target="_blank">
                    <img className="avatar" src={user.avatar_url} alt={user.login} />
                  </a>
              </div>
              <div className="user-info">
                  <h2>{user.login}</h2>
                  <p>{user.bio}</p>

                  <ul className="info">
                      <li>{user.followers}<strong>Followers</strong></li>
                      <li>{user.following}<strong>Following</strong></li>
                      <li>{user.public_repos}<strong>Repos</strong></li>
                  </ul>

                  <div id="repos">
                    {
                      repos
                      .sort((a, b) => b.stargazers_count - a.stargazers_count)
                      .map(repo => (
                        <a className="repo" href={repo.html_url} target="_blank" rel="noopener noreferrer" key={repo.id}> {repo.name} </a>
                      ))
                    }
                  </div>
              </div>
          </div>
        </main>
      }
      
    </div>
  );
}

export default App;
