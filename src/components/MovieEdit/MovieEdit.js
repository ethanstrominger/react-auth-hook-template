import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

// Import axios
import axios from 'axios'
// Import apiUrl
import apiUrl from '../../apiConfig'

import MovieForm from '../MovieForm/MovieForm'

class MovieEdit extends Component {
  constructor () {
    super()

    this.state = {
      movie: {
        title: '',
        director: '',
        year: ''
      },
      updated: false
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

  handleSubmit = (event) => {
    event.preventDefault()

    axios({
      method: 'patch',
      url: `${apiUrl}/movies/${this.props.match.params.id}`,
      data: { movie: this.state.movie },
      headers: {
        Authorization: `Bearer ${this.props.user.token}`
      }
    })
      .then(() => {
        this.setState({ updated: true })
      })
      .catch(console.error)
  }

  handleChange = (event) => {
    // create a new object with key of `name` property on input and value with `value` property
    const updatedField = {
      [event.target.name]: event.target.value
    }
    // Combine the current `movie` with the `updateField`
    const editedMovie = Object.assign(this.state.movie, updatedField)
    // Set the state
    this.setState({ movie: editedMovie })
  }

  render () {
    // Destructure from state:
    const { movie, updated } = this.state
    if (updated) {
      // Redirect to the 'show' page
      return <Redirect to={`/movies/${this.props.match.params.id}`}/>
    }
    return (
      <div>
        <h1>Movie Edit page</h1>
        <MovieForm
          movie={movie}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}

export default MovieEdit
