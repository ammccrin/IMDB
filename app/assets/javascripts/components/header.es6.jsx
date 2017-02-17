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
      debugger
    })
  }


  render() {
    return(
    <header>
      <form action='/' method='get' onSubmit={this.handleSubmit}>
        <input ref='content' type='text' name="title" placeholder='title'/>
        <input type='submit' value='submit'/>
      </form>
    </header>
    )
  }

}
