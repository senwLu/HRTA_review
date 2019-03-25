import exampleMoviesData from '../data/exampleMovieData.js';
import AddMovie from './AddMovie.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
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
    }));
  }

  searchMovie(movie) {
    let list = this.state.movies;

    if (list.includes(movie)) {
      this.setState(state => ({
        movies: [movie]
      }));
    } else {
      console.log('Not on list');
    }
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(AddMovie, { newMovie: this.newMovie }),
      React.createElement(Search, { searchMovie: this.searchMovie }),
      React.createElement(
        'ul',
        null,
        this.state.movies.map((movie, i) => React.createElement(
          'li',
          { key: i },
          movie
        ))
      )
    );
  }

}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiZXhhbXBsZU1vdmllc0RhdGEiLCJBZGRNb3ZpZSIsIlNlYXJjaCIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibW92aWVzIiwibmV3TW92aWUiLCJiaW5kIiwic2VhcmNoTW92aWUiLCJtb3ZpZSIsInNldFN0YXRlIiwibGlzdCIsImluY2x1ZGVzIiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsIm1hcCIsImkiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLGlCQUFQLE1BQThCLDZCQUE5QjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsZUFBckI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLGFBQW5COztBQUVBLE1BQU1DLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWDtBQUNBQyxjQUFRO0FBRkcsS0FBYjtBQUlBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQWhCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixLQUFLQSxXQUFMLENBQWlCRCxJQUFqQixDQUFzQixJQUF0QixDQUFuQjtBQUNEOztBQUVERCxXQUFTRyxLQUFULEVBQWdCO0FBQ2QsU0FBS0MsUUFBTCxDQUFjTixVQUFVO0FBQ3RCQyxjQUFRLENBQUMsR0FBR0QsTUFBTUMsTUFBVixFQUFrQkksS0FBbEI7QUFEYyxLQUFWLENBQWQ7QUFHRDs7QUFFREQsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixRQUFJRSxPQUFPLEtBQUtQLEtBQUwsQ0FBV0MsTUFBdEI7O0FBRUEsUUFBR00sS0FBS0MsUUFBTCxDQUFjSCxLQUFkLENBQUgsRUFBeUI7QUFDdkIsV0FBS0MsUUFBTCxDQUFjTixVQUFVO0FBQ3RCQyxnQkFBUSxDQUFDSSxLQUFEO0FBRGMsT0FBVixDQUFkO0FBR0QsS0FKRCxNQUlPO0FBQ0xJLGNBQVFDLEdBQVIsQ0FBWSxhQUFaO0FBQ0Q7QUFDRjs7QUFHREMsV0FBUztBQUNQLFdBQ0U7QUFBQTtBQUFBO0FBQ0UsMEJBQUMsUUFBRCxJQUFVLFVBQVUsS0FBS1QsUUFBekIsR0FERjtBQUVFLDBCQUFDLE1BQUQsSUFBUSxhQUFhLEtBQUtFLFdBQTFCLEdBRkY7QUFHRTtBQUFBO0FBQUE7QUFDRyxhQUFLSixLQUFMLENBQVdDLE1BQVgsQ0FBa0JXLEdBQWxCLENBQXNCLENBQUNQLEtBQUQsRUFBUVEsQ0FBUixLQUNyQjtBQUFBO0FBQUEsWUFBSSxLQUFLQSxDQUFUO0FBQWFSO0FBQWIsU0FERDtBQURIO0FBSEYsS0FERjtBQVdEOztBQTFDK0I7O0FBOENsQyxlQUFlVixHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleGFtcGxlTW92aWVzRGF0YSBmcm9tICcuLi9kYXRhL2V4YW1wbGVNb3ZpZURhdGEuanMnXG5pbXBvcnQgQWRkTW92aWUgZnJvbSAnLi9BZGRNb3ZpZS5qcydcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2guanMnXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vIG1vdmllczogZXhhbXBsZU1vdmllc0RhdGFcbiAgICAgIG1vdmllczogW11cbiAgICB9O1xuICAgIHRoaXMubmV3TW92aWUgPSB0aGlzLm5ld01vdmllLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWFyY2hNb3ZpZSA9IHRoaXMuc2VhcmNoTW92aWUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG5ld01vdmllKG1vdmllKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgbW92aWVzOiBbLi4uc3RhdGUubW92aWVzLCBtb3ZpZV1cbiAgICB9KSlcbiAgfVxuXG4gIHNlYXJjaE1vdmllKG1vdmllKSB7XG4gICAgbGV0IGxpc3QgPSB0aGlzLnN0YXRlLm1vdmllcztcblxuICAgIGlmKGxpc3QuaW5jbHVkZXMobW92aWUpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICAgIG1vdmllczogW21vdmllXVxuICAgICAgfSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdOb3Qgb24gbGlzdCcpXG4gICAgfVxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxBZGRNb3ZpZSBuZXdNb3ZpZT17dGhpcy5uZXdNb3ZpZX0vPlxuICAgICAgICA8U2VhcmNoIHNlYXJjaE1vdmllPXt0aGlzLnNlYXJjaE1vdmllfS8+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5tb3ZpZXMubWFwKChtb3ZpZSwgaSkgPT4gXG4gICAgICAgICAgICA8bGkga2V5PXtpfT57bW92aWV9PC9saT5cbiAgICAgICAgICApfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdfQ==