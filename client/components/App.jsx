import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Home from './Home'
import AddMovie from './AddMovie'
import MovieDetails from './MovieDetails'

import { getTheMovies } from '../actions/movies'

function App() {  
  const dispatch = useDispatch()
  const location = useLocation()
  
  const isHome = location.pathname === '/'

  // TODO: only trigger on load
  dispatch(getTheMovies())

  return (
    <>
      <header className="header">
        <h1>The flicks</h1>
        {location.pathname !== '/' && <Link to='/'>Home</Link>}
        {location.pathname !== '/add' && <Link to='/add'>Add Movie</Link>}
      </header>
      <section className="main">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
          <Route path='/add' element={<AddMovie />} />
        </Routes>
      </section>
    </>
  )
}

export default App
