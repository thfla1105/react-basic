import { useMoviesStore } from '@/stores/movies'
import Loader from '@/Components/Loader'
import MovieItem from '@/Components/movies/MovieItem'
import '@/App.css'

export default function MovieList() {
  const movies = useMoviesStore(state => state.movies)
  const isLoading = useMoviesStore(state => state.isLoading)
  const message = useMoviesStore(state => state.message)

  return (
    <>
      {isLoading && (
        <div className="relative container h-[30px] w-[30px]">
          <Loader />
        </div>
      )}
      {message && (
        <div className="container text-center text-red-500">{message}</div>
      )}
      <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map(movie => (
          <MovieItem
            key={movie.imdbID}
            movie={movie}
          />
        ))}
      </div>
    </>
  )
}
