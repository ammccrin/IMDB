class Movies extends React.Component {
  render() {
    let movie = this.props.movie

    if (movie) {
      return(
      <div className='movie'>
        <h3>{movie.Title}</h3>
        <a href='movies/{movie.imdbID}' ><img src={movie.Poster}  alt=""/></a>
      </div>
      )
    } else {
      return(
        <p>No Movies were found</p>
      )
    }

  }

}
