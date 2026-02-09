import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Landing from './pages/Landing/Landing.tsx'
import NotFound from './pages/NotFound/NotFound.tsx'

import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {path:"/", element: <Landing />},
  {path: "*", element: <NotFound />}
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
