class AddMovie extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          value: ''
      }

      this.handleMovieChange = this.handleMovieChange.bind(this);
      this.handleMovieSubmit = this.handleMovieSubmit.bind(this);
    };



handleMovieChange(event) {
    this.setState({value: event.target.value });
}

handleMovieSubmit(event) {
    event.preventDefault();
    this.props.newMovie(this.state.value);
}

  
  render(){
    return (
        <form onSubmit={this.handleMovieSubmit}>
        <label>
            Add Movie: 
            <input name="newMovie" type="text" value={this.state.value} onChange={this.handleMovieChange} />
        </label>
        <input type="submit"/>
    </form>   
    );
  }
}

export default AddMovie;