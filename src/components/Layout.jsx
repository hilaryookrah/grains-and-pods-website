import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import useReveal from '../hooks/useReveal';

export default function Layout() {
  const { pathname } = useLocation();

  // Start each new page at the top instead of keeping the previous scroll position.
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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