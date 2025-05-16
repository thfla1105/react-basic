import { useState, useEffect } from 'react'
import './App.css'

export type Movies = Movie[]

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export default function App() {
  const [movies, setMovies] = useState<Movies>([])

  useEffect(() => {
    fetchMovies()
  }, [])

  async function fetchMovies() {
    const response = await fetch(
      'https://omdbapi.com/?apikey=7035c60c&s=Avengers'
    )
    const { Search } = await response.json()
    setMovies(Search)
  }

  //fetchMovies() //App이 다시 정의되는이슈 -> 무한루프, 개선 필요-> useEffect 사용

  return (
    <>
      <h1>Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ul>
    </>
  )
}
