import React from 'react'

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    {props.repos.map(repo => {
      return <li>{repo.name}</li>
    })}
  </div>
)

export default RepoList
