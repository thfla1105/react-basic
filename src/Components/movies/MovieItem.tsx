import Image from '@/Components/Image'
import type { Movie } from '@/stores/movies'

export default function MovieItem({ movie }: { movie: Movie }) {
  return (
    <div className="card">
      <div className="flex flex-col p-4">
        <h2 className="text-lg font-bold">{movie.Title}</h2>
        <p className="text-sm text-gray-500">{movie.Year}</p>
      </div>
      <Image
        src={movie.Poster}
        alt={movie.Title}
      />
    </div>
  )
}
