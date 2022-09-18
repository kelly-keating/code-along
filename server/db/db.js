const conn = require('./connection')

function getAllMovies(db = conn) {
  return db('movies')
}

// POST
// PATCH
// DELETE

module.exports = {
  getAllMovies
}
