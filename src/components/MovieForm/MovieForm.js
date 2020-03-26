import React from 'react'

const MovieForm = ({ movie, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input
      placeholder="A Wonderful Film"
      name="title"
      value={movie.title || ''}
      onChange={handleChange}
    />
    <label>Director</label>
    <input
      placeholder="A Director"
      name="director"
      value={movie.director || ''}
      onChange={handleChange}
    />
    <label>Year Released</label>
    <input
      placeholder="YYYY-MM-DD"
      name="year"
      value={movie.year || ''}
      type="date"
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
  </form>
)

export default MovieForm
