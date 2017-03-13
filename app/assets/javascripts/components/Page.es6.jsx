class Page extends React.Component {
  constructor(){
    super ()
    this.state = {
      movies: []
    }
    this.addMovie = this.addMovie.bind(this)
  }

  addMovie(movie){
      this.setState({movies: movie})
    }


  render() {
    return(
      <div className='center'>
        <Header addMovie={this.addMovie}/>
        <div className='background'>
          <div className='container'>
          {
            this.state.movies.map(function(movie, i ) {
              return <Movies movie={movie} key={i} />
            })
          }
          </div>
        </div>
      </div>
    )
  }

}
