class Movies extends React.Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {}
  }

  handleSubmit(e) {
    e.preventDefault()
    let id = this.props.movie.imdbID

    $.ajax({
      url: "http://www.omdbapi.com/?i=" + id
    }).done(response => {
        this.state = response
      })

    let target = $(e.target).parent().parent().parent()
    console.log(target)
    console.log(target[0])
    target.flip()
    target.flip('toggle')


  }

  render() {
    let movie = this.props.movie

    if (movie) {
      return(
      <div className='movieHolder'>
        <div className='movie'>
          <div className='front'>
            <h3>{movie.Title}</h3>
            <a href='movies/{movie.imdbID}' ><img src={movie.Poster}  onClick={this.handleSubmit}alt=""/></a>
          </div>

          <div className='back'>
            <h3>hi</h3>
          </div>
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
