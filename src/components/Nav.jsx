import { NavLink, Link } from 'react-router-dom';

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
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main">
        <Link to="/" className="brand">
          <img src="/images/logo.png" alt="Grains and Pods logo" />
          <span>Grains and Pods</span>
        </Link>

        <div className="nav-links">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end}>
              {link.label}
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