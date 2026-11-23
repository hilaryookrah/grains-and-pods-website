import { useState } from 'react';
import { contact } from '../data/contact';

const roles = [
  'Crop farmer / co-operative',
  'Poultry farmer / feed miller',
  'Investor / development partner',
  'Government / media / other',
];

const emptyForm = { role: roles[0], name: '', phone: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | whatsapp | error

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.phone.trim()) next.phone = 'Please enter a phone number.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (!contact.formEndpoint) {
      const text = [
        `Hi, I'm ${form.name} (${form.role}).`,
        `Phone: ${form.phone}`,
        form.email && `Email: ${form.email}`,
        form.message,
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
        body: JSON.stringify(form),
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
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Contact</p>
          <h1>Let's talk grain</h1>
          <p className="page-hero-lead">
            Selling, buying or partnering? Tell us who you are and we'll get back to you within {contact.responseTime}.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-inner">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
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
              <input id="email" name="email" type="email" value={form.email} onChange={update} />
            </div>

            <div className="contact-field">
              <label htmlFor="message">How can we help?</label>
              <textarea
                id="message"
                name="message"
                rows="5"
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