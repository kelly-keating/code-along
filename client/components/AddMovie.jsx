import React, { useState } from 'react'

import { searchForMovie } from '../apis/imdb'

function AddMovie() {
  const [movieSearch, setMovieSearch] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = async (evt) => {
    evt.preventDefault()
    const searchResults = await searchForMovie(movieSearch)
    setResults(searchResults)
    setMovieSearch('')
  }

  const handleTyping = (evt) => {
    setMovieSearch(evt.target.value)
  }

  return (
    <>
      <h2>AddMovie</h2>

      <form onSubmit={handleSearch} >
        <label htmlFor='search'>New movie:</label>
        <input type='text' id='search' onChange={handleTyping} value={movieSearch} />
        <button>Search</button>
      </form>

      {results.map(movie => <p>{movie.title}</p>)}
    </>
  )
}

export default AddMovie
