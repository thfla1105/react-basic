import { createBrowserRouter, RouterProvider } from 'react-router'
import DefaultLayout from '@/Components/routes/layouts/Default'
import Home from '@/Components/routes/pages/Home'
import About from '@/Components/routes/pages/About'
import Movies from '@/Components/routes/pages/Movies'
import MovieDetails from '@/Components/routes/pages/MovieDetails'
import Todos from '@/Components/routes/pages/Todos'
import EmptyLayout from '@/Components/routes/layouts/Empty'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },

      {
        path: '/about',
        element: <About />
      },
      {
        path: '/movies',
        element: <Movies />
      },
      {
        path: '/movies/:movieId', // /movies/tt1234567
        element: <MovieDetails />
      },
      {
        element: <EmptyLayout />,
        children: [
          {
            path: '/todos',
            element: <Todos />
          }
        ]
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
