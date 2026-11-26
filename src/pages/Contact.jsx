import { useState } from 'react';
import { contact } from '../data/contact';

const roles = [
  'Crop farmer / co-operative',
  'Poultry farmer / feed miller',
  'Investor / development partner',
  'Government / media / other',
];

const emptyForm = { role: roles[0], name: '', phone: '', email: '', message: '', company: '' };

// Length caps keep payloads sane and stop oversized WhatsApp links / form posts.
const LIMITS = { name: 100, phone: 20, email: 254, message: 2000 };
const PHONE_RE = /^\+?[0-9\s()-]{7,20}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | whatsapp | error

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.phone.trim()) next.phone = 'Please enter a phone number.';
    else if (!PHONE_RE.test(form.phone.trim())) next.phone = 'Please enter a valid phone number.';
    if (form.email.trim() && !EMAIL_RE.test(form.email.trim())) next.email = 'Please enter a valid email address.';
    if (!roles.includes(form.role)) next.role = 'Please choose an option.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Honeypot: real visitors never see or fill the hidden "company" field; bots usually do.
    if (form.company) {
      setStatus('sent');
      return;
    }
    if (!validate()) return;

    const { company: _honeypot, ...payload } = form;
    void _honeypot;

    if (!contact.formEndpoint) {
      const text = [
        `Hi, I'm ${payload.name.trim()} (${payload.role}).`,
        `Phone: ${payload.phone.trim()}`,
        payload.email.trim() && `Email: ${payload.email.trim()}`,
        payload.message.trim(),
      ]
        .filter(Boolean)
        .join('\n');
      window.open(`${contact.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
      setStatus('whatsapp');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(contact.formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Request failed');
      setForm(emptyForm);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="page-hero hero-gradient">
        <div className="page-hero-inner">
          <h1>Let's talk grain</h1>
          <p className="page-hero-lead">
            Selling, buying or partnering? Tell us who you are and we'll get back to you within {contact.responseTime}.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-inner">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {/* Honeypot field for spam bots; hidden from people and screen readers. */}
            <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" value={form.company} onChange={update} />
            </div>

            <div className="contact-field">
              <label htmlFor="role">I am a…</label>
              <select id="role" name="role" value={form.role} onChange={update}>
                {roles.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </div>

            <div className="contact-field-row">
              <div className="contact-field">
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Kwame Mensah"
                  maxLength={LIMITS.name}
                  autoComplete="name"
                  value={form.name}
                  onChange={update}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && <span id="name-error" className="contact-field-error">{errors.name}</span>}
              </div>

              <div className="contact-field">
                <label htmlFor="phone">Phone / WhatsApp</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+233"
                  maxLength={LIMITS.phone}
                  autoComplete="tel"
                  value={form.phone}
                  onChange={update}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && <span id="phone-error" className="contact-field-error">{errors.phone}</span>}
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="email">Email (optional)</label>
              <input
                id="email"
                name="email"
                type="email"
                maxLength={LIMITS.email}
                autoComplete="email"
                value={form.email}
                onChange={update}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <span id="email-error" className="contact-field-error">{errors.email}</span>}
            </div>

            <div className="contact-field">
              <label htmlFor="message">How can we help?</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                maxLength={LIMITS.message}
                placeholder="e.g. I farm 10 acres of maize in Wenchi…"
                value={form.message}
                onChange={update}
              />
            </div>

            <button type="submit" className="btn btn-forest contact-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'sent' && (
              <p role="status" className="contact-status">
                Thanks. We've received your message and will reply within {contact.responseTime}.
              </p>
            )}
            {status === 'whatsapp' && (
              <p role="status" className="contact-status">
                WhatsApp has opened with your message ready. Press send there and we'll reply within{' '}
                {contact.responseTime}.
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="contact-status contact-status-error">
                Something went wrong. Please try again, or WhatsApp us directly.
              </p>
            )}
          </form>

          <aside className="contact-side">
            <a
              className="contact-whatsapp"
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-whatsapp-label">Fastest reply</span>
              <span className="contact-whatsapp-title">Chat on WhatsApp →</span>
              <span className="contact-whatsapp-num">{contact.phoneDisplay}</span>
            </a>

            <div className="contact-details">
              <div>
                <strong>Call</strong>
                <a href={`tel:${contact.phoneTel}`}>{contact.phoneDisplay}</a>
              </div>
              <div>
                <strong>Email</strong>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
              <div>
                <strong>Visit the grain bank</strong>
                {contact.address}, Ghana
              </div>
              <div>
                <strong>Hours</strong>
                {contact.openingHours}
              </div>
            </div>

            <div className="contact-map" role="img" aria-label="Map of Mantukwa, Sunyani West">
              [Map]
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}