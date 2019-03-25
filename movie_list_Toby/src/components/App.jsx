import exampleMoviesData from '../data/exampleMovieData.js'
import AddMovie from './AddMovie.js'
import Search from './Search.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // movies: exampleMoviesData
      movies: []
    };
    this.newMovie = this.newMovie.bind(this);
    this.searchMovie = this.searchMovie.bind(this);
  }

  newMovie(movie) {
    this.setState(state => ({
      movies: [...state.movies, movie]
    }))
  }

  searchMovie(movie) {
    let list = this.state.movies;

    if(list.includes(movie)) {
      this.setState(state => ({
        movies: [movie]
      }))
    } else {
      console.log('Not on list')
    }
  }


  render() {
    return (
      <div>
        <AddMovie newMovie={this.newMovie}/>
        <Search searchMovie={this.searchMovie}/>
        <ul>
          {this.state.movies.map((movie, i) => 
            <li key={i}>{movie}</li>
          )}
        </ul>
      </div>
    )
  }

}

export default App;