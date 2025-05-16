import Header from '@/Components/Header'
import { Outlet } from 'react-router'
import Footer from '@/Components/Footer'

export default function Default() {
  return (
    <>
      <Header />
      <Outlet /> {/* Outlet is used to render the child routes */}
      <Footer />
    </>
  )
}
