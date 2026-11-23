import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/crop-farmers', label: 'Crop Farmers' },
  { to: '/poultry-farmers', label: 'Poultry Farmers' },
  { to: '/quality', label: 'Quality' },
  { to: '/impact', label: 'Impact' },
  { to: '/traceability', label: 'Traceability' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <nav className={`nav${open ? ' is-open' : ''}`}>
        <Link to="/" className="brand">
          <img src="/images/logo.png" alt="Grains and Pods logo" />
          <span>Grains and Pods</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>

        <div id="site-menu" className="nav-links">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <Link to="/contact" className="nav-cta">
          Partner with us
          <span className="nav-cta-icon" aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}