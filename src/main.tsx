//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from '@/Components/routes/index'

createRoot(document.getElementById('root')!).render(
  <>
    <Router />
  </>
)
