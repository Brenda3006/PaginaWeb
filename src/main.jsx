import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from './Login.jsx'
import Registro from './Registro.jsx'
import Review from './Review.jsx'
import Inicio from './Inicio.jsx'
import Cuenta from './Cuenta.jsx'
import Contra from './Contra.jsx'
import MejorCalificacion from './MejorCalificacion.jsx'

import './styles.scss'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hola soy el home :D </div>
  },
  {
    path: "/app",
    element: <App/>
  },
  {
    path: "/Login",
    element: <Login/>
  },
  {
    path: "/Registro",
    element: <Registro/>
  },
  {
    path: "/Review",
    element: <Review/>
  },
  {
    path: "/Inicio",
    element: <Inicio/>
  },
  {
    path: "/Cuenta",
    element: <Cuenta/>
  },
  {
    path: "/MejorCalificacion",
    element: <MejorCalificacion/>
  },
  {
    path: "/Contra",
    element: <Contra/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
