import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router';
import './index.css'
import App from './App.jsx'
import RouterIndex from './routes/RouterIndex.jsx';
import Welkum from './routes/Welkum.jsx';
import Menoo from './routes/Menoo.jsx'
import About from './routes/About.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <RouterIndex />},
      {
        path: "/welkum",
        element: <Welkum />
      },
      {
        path: "/menoo",
        element: <Menoo />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
