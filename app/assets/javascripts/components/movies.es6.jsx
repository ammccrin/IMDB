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
    console.log(response)
        this.setState(response)
      })

    let target = $(e.target).parent().parent().parent()
    target.flip({
      autoSize: false,
      autoWidth: false,
      autoHeight: false
    })
    target.children('.back').fadeIn()
    target.flip('toggle')
    target.children('.front').css('position','relative')
    target.children('.back').css('position','absolute')
    target.children('.back').css('top', '50px')



  }

  render() {
    let movie = this.props.movie

    if (movie) {
      return(
        <div className='movie'>
          <div className='front'>
            <h3>{movie.Title}</h3>
            <a href='movies/{movie.imdbID}' ><img src={movie.Poster}  onClick={this.handleSubmit}alt=""/></a>
          </div>

          <div className='back'>
            <h4>{movie.Title}</h4>
            <h3>Plot</h3>
            <p>{this.state.Plot}</p>
            <h4 className='rating' >Rated: {this.state.Rated}</h4>
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
