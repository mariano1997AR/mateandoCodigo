import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Inicio } from './pages/Inicio/Inicio.tsx'
import {HeadProvider} from 'react-head';
import { Layout } from './components/Layout/Layout.tsx';
import { TerminosCondiciones } from './pages/TerminosCondiciones/TerminosCondiciones.tsx';

const router = createBrowserRouter([
 {
    path:'/', 
    element:<Layout />,
    children:[
        { index:true, element:<Inicio /> },
        {path:'inicio', element:<Inicio /> },
    ]

 },
 {
   path:'terminos-y-condiciones',
   element:<TerminosCondiciones />
 },
],{
    basename: '/'
}
)


createRoot(document.getElementById('root')!).render(
  <HeadProvider>
        <RouterProvider router={router} />
  </HeadProvider>
)
