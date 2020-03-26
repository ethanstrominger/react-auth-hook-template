import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Import Axios:
import axios from 'axios'
// Import apiConfig:
import apiUrl from '../../apiConfig'

class Movies extends Component {
  constructor () {
    // Call the constructor on `Component` (the parent class)
    super()

    this.state = {
      movies: null
    }
  }

  componentDidMount () {
    // Run once, when the component mounts
    // This is where our API request will go
    axios({
      url: `${apiUrl}/movies`,
      method: 'get',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      .then(res => {
        console.log(res)
        this.setState({ movies: res.data.movies })
      })
      .catch(err => {
        this.props.msgAlert({
          heading: 'Movies List failed to load',
          message: err.message,
          variant: 'danger'
        })
      })
  }

  render () {
    // Destructure things from state:
    const { movies } = this.state
    let movieJSX
    // 3 states:
    // if movies is `null`, we are loading
    if (!movies) {
      movieJSX = <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"/>
    } else if (movies.length === 0) {
      // If the array of movies is empty, we have no movies to show
      movieJSX = 'No movies yet, go make some!'
    } else {
      // Otherwise, display the movies
      const moviesList = movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))

      movieJSX = (
        <ul>
          {moviesList}
        </ul>
      )
    }
    return (
      <React.Fragment>
        <h1>Movies Page</h1>
        {movieJSX}
      </React.Fragment>
    )
  }
}

export default Movies
