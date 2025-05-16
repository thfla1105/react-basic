import { useMoviesStore } from '@/stores/movies'

export default function MovieSearcher() {
  const fetchMovies = useMoviesStore(state => state.fetchMovies)
  const searchText = useMoviesStore(state => state.searchText)
  const setSearchText = useMoviesStore(state => state.setSearchText)

  return (
    <div className="row-stack right-align card items-center justify-center">
      <input
        type="text"
        placeholder="Search for movies"
        onChange={event => setSearchText(event.target.value)}
        value={searchText}
        onKeyDown={event => {
          if (event.key === 'Enter') {
            fetchMovies()
          }
        }}
      />
      <button onClick={fetchMovies}>Search</button>
    </div>
  )
}
