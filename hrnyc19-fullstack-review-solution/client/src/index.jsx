import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Search from './components/Search.jsx'
import RepoList from './components/RepoList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    this.getRepos()
  }

  search(term) {
    console.log(`${term} was searched`)
    axios.post('/repos', {username: term})
    .then(() => this.getRepos())
  }

  getRepos() {
    axios.get('/repos')
    .then(({data}) => this.setState({repos: data}))
  }

  render() {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <RepoList repos={this.state.repos} />
        <Search onSearch={this.search.bind(this)} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
