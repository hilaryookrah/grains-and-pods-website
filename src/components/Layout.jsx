import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import useReveal from '../hooks/useReveal';

export default function Layout() {
  useReveal();

  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}