import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import axios from 'axios'

export type Movies = Movie[]
export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export const useMoviesStore = create(
  combine(
    //combine 미들웨어
    {
      movies: [] as Movies, //[]는 추론 안 됨 as로 단언
      searchText: '',
      message: '',
      isLoading: false
    },
    (set, get) => ({
      setSearchText: (searchText: string) => set({ searchText }),
      fetchMovies: async () => {
        const { searchText, isLoading } = get()
        if (searchText.length === 0 || !searchText.trim()) return
        if (isLoading) return
        set({ isLoading: true, message: '' })

        // await new Promise(resolve => {
        //   setTimeout(resolve, 2000)
        // }) // 2초 뒤에 실행, 이 코드 자리에서 2초 기다림

        try {
          const {
            data: { Search: movies = [], Response, Error }
          } = await axios(
            `https://omdbapi.com/?apikey=7035c60c&s=${searchText}`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }
            }
          )
          if (Response === 'False') {
            set({ message: Error, isLoading: false })
            return
          }

          set({ movies, isLoading: false })
          if (!movies || movies.length === 0) {
            set({ message: 'No data' })
            return
          }
          console.log(movies)
        } catch (error) {
          if (error instanceof Error) {
            set({ message: error.message, isLoading: false })
          }
          return
        } finally {
          set({
            isLoading: false
          })
        }
      }
    })
  )
)

// create<{
//   movies: Movies
//   searchText: string
//   message?: string
//   isLoading: boolean
//   setSearchText: (searchText: string) => void
//   fetchMovies: () => Promise<void>
// }>((set, get) => ({
//   movies: [],
//   searchText: '',
//   message: '',
//   isLoading: false,
//   setSearchText: (searchText: string) => set({ searchText }),
//   fetchMovies: async () => {
//     const { searchText, isLoading } = get()
//     if (searchText.length === 0 || !searchText.trim()) return
//     if (isLoading) return
//     set({ isLoading: true, message: '' })
//     await new Promise(resolve => {
//       setTimeout(resolve, 2000)
//     }) // 2초 뒤에 실행, 이 코드 자리에서 2초 기다림

//     try {
//       const {
//         data: { Search: movies = [], Response, Error }
//       } = await axios(`https://omdbapi.com/?apikey=7035c60c&s=${searchText}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//       if (Response === 'False') {
//         set({ message: Error, isLoading: false })
//         return
//       }

//       set({ movies, isLoading: false })
//       if (!movies || movies.length === 0) {
//         set({ message: 'No data' })
//         return
//       }
//       console.log(movies)
//     } catch (error) {
//       if (error instanceof Error) {
//         set({ message: error.message, isLoading: false })
//       }
//       return
//     } finally {
//       set({
//         isLoading: false
//       })
//     }
//   }
// }))
