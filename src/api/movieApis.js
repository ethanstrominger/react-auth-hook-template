import apiUrl from '../apiConfig'
import axios from 'axios'

const getMovieById = (props) => {
  return axios({
    url: `${apiUrl}/movies/${props.match.params.id}`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${props.user.token}`
    }
  })
}

const getMovies = (props) => {
  return axios({
    url: `${apiUrl}/movies/`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${props.user.token}`
    }
  })
}

const saveUpdatedMovie = (props, movie) => {
  return axios({
    url: `${apiUrl}/movies/${props.match.params.id}`,
    method: 'PATCH',
    data: {
      movie: movie
    },
    headers: {
      Authorization: `Bearer ${props.user.token}`
    }
  })
}

export {
  getMovieById,
  getMovies,
  saveUpdatedMovie
}
