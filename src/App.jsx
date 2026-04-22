import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home_definitivo.jsx'
import NotFound from './routes/NotFound.jsx'

/* 🔽 IMPORTÁS LAS NUEVAS PÁGINAS */
import TicPage from './Pages/TicPage.jsx'
import MultimediaPage from './Pages/MultimediaPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* 🔵 NUEVAS RUTAS */}
      <Route path="/tic" element={<TicPage />} />
      <Route path="/multimedia" element={<MultimediaPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}