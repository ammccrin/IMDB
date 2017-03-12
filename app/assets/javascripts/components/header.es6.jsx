class Header extends React.Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    let name = this.refs.content.value

    $.ajax({
      url: "http://www.omdbapi.com/?s=" + name

    }).done(response => {
      this.props.addMovie(response.Search)
    }).fail(error => {
      alert("NOOOO")
    })
  }


  render() {
    return(
    <div>
      <header>
        <h1>Search any movie title, anytime</h1>
      </header>

      <div className='search'>
        <div className='container'>
          <p>Type in a title and we will return every movie that has that title.</p>

          <form action='/' method='get' onSubmit={this.handleSubmit}>
              <input className='input' ref='content' type='text' name="title" placeholder='Title'/>
              <input className='submit' type='submit' value='submit'/>
          </form>
        </div>
      </div>
    </div>
    )
  }

}
