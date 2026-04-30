import { Routes, Route } from 'react-router-dom'

import Home from './routes/Home_definitivo'
import NotFound from './routes/NotFound'

import TicPage from './Pages/TicPage'
import MultimediaPage from './Pages/MultimediaPage'

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