import React from 'react'

const Card = ({user, repos}) => {
    return(
        <main id="main">
          <div className="card">
              <div>
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer">
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
    )
}

export default Card