import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import useReveal from '../hooks/useReveal';

// Each interior page gets one entry effect. Home is intentionally absent.
const PAGE_TRANSITIONS = {
  '/about': 'zoom',
  '/crop-farmers': 'diagonal',
  '/poultry-farmers': 'shadow',
  '/quality': 'smooth',
  '/impact': 'zoom',
  '/traceability': 'diagonal',
  '/contact': 'shadow',
};

export default function Layout() {
  const { pathname } = useLocation();
  const transition = PAGE_TRANSITIONS[pathname];

  // Start each new page at the top instead of keeping the previous scroll position.
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useReveal();

  return (
    <>
      <Nav />
      <main
        key={pathname}
        className={transition ? `page-enter page-enter--${transition}` : undefined}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
