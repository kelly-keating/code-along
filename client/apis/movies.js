import request from 'superagent'

export function fetchAllMovies() {
  return request.get('/api/v1/movies')
    .then(res => {
      // console.log('fetch result', res.body)
      return res.body
    })
}