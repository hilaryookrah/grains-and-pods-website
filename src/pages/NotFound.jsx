import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <p className="eyebrow">Page not found</p>
        <h1>We couldn't find that page</h1>
        <p className="page-hero-lead">The link may be broken, or the page may have moved.</p>
        <div>
          <Link to="/" className="btn btn-gold">Back to home</Link>
        </div>
      </div>
    </section>
  );
}
