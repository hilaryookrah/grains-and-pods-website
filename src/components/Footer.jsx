import { Link } from 'react-router-dom';
import { contact } from '../data/contact';

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-inner">
        <div className="footer-top">
          <h2 className="footer-slogan">Fair prices for farmers. Clean grain for Ghana.</h2>
          <Link to="/contact" className="footer-cta">
            Partner with us
            <span className="footer-cta-icon" aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="footer-cards">
          <div className="footer-brand-card">
            <div className="footer-brand">
              <div className="footer-logo-row">
                <img src="/images/logo.png" alt="Grains and Pods logo" />
                <span>Grains and Pods</span>
              </div>
              <p>
                Linking Ghana's crop and poultry farmers, <strong>from harvest to feed bag.</strong>
              </p>
            </div>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              Chat with us on WhatsApp
            </a>
          </div>

          <div className="footer-info">
            <div className="footer-columns">
              <div className="footer-col">
                <span className="footer-col-title">For farmers</span>
                <Link to="/crop-farmers">Crop Farmers</Link>
                <Link to="/poultry-farmers">Poultry Farmers</Link>
                <Link to="/quality">Quality</Link>
              </div>
              <div className="footer-col">
                <span className="footer-col-title">Company</span>
                <Link to="/about">About</Link>
                <Link to="/impact">Impact</Link>
                <Link to="/traceability">Traceability</Link>
              </div>
              <div className="footer-col">
                <span className="footer-col-title">Visit &amp; talk</span>
                <span>{contact.address}</span>
                <a href={`tel:${contact.phoneTel}`}>{contact.phoneDisplay}</a>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </div>

            <div className="footer-bottom">
              <span>© 2026 Grains and Pods Ltd. All rights reserved.</span>
              <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp us →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-watermark" aria-hidden="true">Grains &amp; Pods</div>
    </footer>
  );
}