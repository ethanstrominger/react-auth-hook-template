let apiUrl
// template instructions: configure here
const apiUrls = {
  production: 'https://aqueous-atoll-85096.herokuapp.com',
  development: 'http://localhost:4741'
  // development: 'https://movie-auth-api.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
