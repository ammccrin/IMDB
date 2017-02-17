class Page extends React.Component {
  constructor(){
    super ()
    this.state = {
      movies: []
    }
    this.addMovie = this.addMovie.bind(this)
  }

// debugger
  addMovie(movie){
      this.setState({movies: movie})
    }


  render() {
    return(
      <div className='center'>
        <Header addMovie={this.addMovie}/>
        <h1>Here are your results</h1>
        <Movie movies={this.state.movies} />
      </div>

    )
  }

}
