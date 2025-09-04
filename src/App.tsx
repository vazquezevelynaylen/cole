import { Outlet } from 'react-router-dom';
import Header from '@components/header/Header';
import Subnav from '@components/nav/Subnav';
import Footer from '@components/footer/Footer';
import A11yControls from '@components/a11y/A11yControls';

export default function App() {
  return (
    <>
      <Header />
      <Subnav />
      <main id="contenido" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <A11yControls />
    </>
  );
}
