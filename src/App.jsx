import { Routes, Route } from 'react-router-dom'

import Home from './routes/Home_definitivo.jsx'
import NotFound from './routes/NotFound.jsx'

import TicPage from './pages/TicPage.jsx'
import MultimediaPage from './pages/MultimediaPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/tic" element={<TicPage />} />
      <Route path="/multimedia" element={<MultimediaPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}