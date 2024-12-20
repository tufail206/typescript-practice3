import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider,createRoutesFromElements } from 'react-router-dom'
import { appRoutes } from './routes/index.tsx'

const router = createBrowserRouter(createRoutesFromElements(appRoutes))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
