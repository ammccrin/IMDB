class Movies extends React.Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    var id = this.props.movie.imdbID
    console.log(id)

    $.ajax({
      url: "http://www.omdbapi.com/?i=" + id
    }).done(response => {
        debugger
       $(this.props).flip()
      })

  }

  render() {
    let movie = this.props.movie

    if (movie) {
      return(
        <div className='movie' onClick={this.handleSubmit}>
          <div className='front'>
            <h3>{movie.Title}</h3>
            <a href='movies/{movie.imdbID}' ><img src={movie.Poster}  alt=""/></a>
          </div>

          <div className='back'>

          </div>
        </div>
      )
    } else {
      return(
        <p>No Movies were found</p>
      )
    }

  }

}
