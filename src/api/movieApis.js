import apiUrl from '../apiConfig'
import axios from 'axios'

export const getMovies = (props) => {
  return axios({
    url: `${apiUrl}/movies/`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${props.user.token}`
    }
  })
}
