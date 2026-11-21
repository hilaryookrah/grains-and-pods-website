import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header>Nav goes here</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer goes here</footer>
    </>
  );
}