import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

// Import Axios:
import axios from 'axios'
// Import apiConfig:
import apiUrl from '../../apiConfig'

class Movie extends Component {
  constructor () {
    super()

    this.state = {
      movie: null,
      deleted: false
    }
  }

  componentDidMount () {
    axios({
      url: `${apiUrl}/movies/${this.props.match.params.id}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${this.props.user.token}`
      }
    })
      .then(res => {
        this.setState({ movie: res.data.movie })
      })
      .catch(console.error)
  }

  delete = (event) => {
    axios({
      method: 'delete',
      url: `${apiUrl}/movies/${this.props.match.params.id}`,
      headers: {
        Authorization: `Bearer ${this.props.user.token}`
      }
    })
      .then(() => {
        this.setState({ deleted: true })
      })
      .catch(console.error)
  }

  render () {
    // Destructure from state:
    const { movie, deleted } = this.state
    let movieJSX

    // 3 states:
    // If movie is `null`, we are loading
    if (!movie) {
      movieJSX = <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"/>
    } else if (deleted) {
      movieJSX = <Redirect to="/movies"/>
    } else {
      // We have a movie, display it!
      movieJSX = (
        <div>
          <h3>{movie.title}</h3>
          <p>Director: {movie.director}</p>
          <p>Year Released: {movie.year}</p>
          <button onClick={this.delete}>Delete Movie</button>
          <Link to={`/movies/${this.props.match.params.id}/edit`}>
            <button>Update Movie</button>
          </Link>
        </div>
      )
    }

    return (
      movieJSX
    )
  }
}

export default Movie
