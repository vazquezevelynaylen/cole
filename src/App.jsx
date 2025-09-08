import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Home from './routes/Home'
import EspecialidadesPage from './routes/Especialidades'
import NotFound from './routes/NotFound'

export default function App(){
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/especialidades" element={<EspecialidadesPage/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </HelmetProvider>
  )
}
