import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'

// Import axios
import axios from 'axios'
// Import apiUrl
import apiUrl from '../../apiConfig'

// Import MovieForm:
import MovieForm from '../MovieForm/MovieForm'

class MovieCreate extends Component {
  constructor () {
    super()

    this.state = {
      movie: {
        title: '',
        director: '',
        year: ''
      },
      createdId: null
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    axios({
      method: 'post',
      url: `${apiUrl}/movies`,
      data: { movie: this.state.movie },
      headers: {
        Authorization: `Bearer ${this.props.user.token}`
      }
    })
      .then(res => {
        console.log(res.data)
        this.setState({ createdId: res.data.movie._id })
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
    const { movie, createdId } = this.state
    if (createdId) {
      // Redirect to the 'show' page
      return <Redirect to={`/movies/${createdId}`}/>
    }
    return (
      <Fragment>
        <h1>Movie Create page</h1>
        <MovieForm
          movie={movie}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </Fragment>
    )
  }
}

export default MovieCreate
