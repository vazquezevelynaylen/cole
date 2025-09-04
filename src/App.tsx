// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from '@routes/Home';
import NotFound from '@routes/NotFound';
import Header from '@components/header/Header';
import Subnav from '@components/nav/Subnav';
import Footer from '@components/footer/Footer';
import A11yControls from '@components/a11y/A11yControls';
import '@styles/utilities.css';

export default function App() {
  return (
    <>
      <Header />
      <Subnav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <A11yControls />
    </>
  );
}
