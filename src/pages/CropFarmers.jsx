import { Link } from 'react-router-dom';
import { contact } from '../data/contact';

const benefits = [
  {
    title: 'Guaranteed buyer',
    text: 'We commit to buying your maize at a pre-agreed, fair price, so you can plan your season.',
  },
  {
    title: 'We dry and store it',
    text: "Our industrial dryer and hermetic silos protect your grain from mould and loss. You don't lose 30% of your harvest anymore.",
  },
  {
    title: 'Inputs and training',
    text: 'Access hybrid seed, fertilizer and extension support to grow more on every acre.',
  },
  {
    title: 'Steady income',
    text: 'Predictable earnings for school fees, health and reinvesting in your farm.',
  },
];

const steps = [
  {
    num: '1',
    title: 'Register your farm',
    text: 'Call, WhatsApp or visit us. We record your farm and contact details.',
  },
  {
    num: '2',
    title: 'Agree a price',
    text: 'We agree a fair offtake price with you before harvest.',
  },
  {
    num: '3',
    title: 'Grow with support',
    text: 'Get seed, fertilizer and advice through the season.',
  },
  {
    num: '4',
    title: 'Deliver and get paid',
    text: 'Bring your harvest to our grain bank. We handle the rest, and you get paid.',
    gold: true,
  },
];

export default function CropFarmers() {
  return (
    <>
      {/* Hero */}
      <section className="hero-band hero-split">
        <div className="hero-split-copy">
          <h1>Stop selling your harvest at the lowest price of the year</h1>
          <p className="hero-split-lead">
            We agree a fair price with you before harvest, buy your maize, and handle the drying and storage. No
            distress sales, no rotting grain.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-gold">Join our farmer network</Link>
            <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Call or WhatsApp us
            </a>
          </div>
        </div>
        <div className="hero-split-media">
          <img src="/images/consult_6.jpeg" alt="Maize harvest in the Bono Region" />
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="wrap stack-xl">
          <h2 className="h2">What you get</h2>
          <div className="benefit-grid">
            {benefits.map((b) => (
              <div className="benefit" key={b.title}>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-forest">
        <div className="wrap stack-xl">
          <h2 className="h2">How to work with us</h2>
          <ol className="steps">
            {steps.map((s) => (
              <li className={`step${s.gold ? ' step-gold' : ''}`} key={s.num}>
                <span className="step-num">{s.num}</span>
                <strong>{s.title}</strong>
                <span>{s.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Programmes */}
      <section className="section">
        <div className="wrap story">
          <img
            className="story-image"
            src="/images/consult_3.jpeg"
            alt="The Grains and Pods team"
          />
          <div className="programme-copy">
            <p className="eyebrow">Growing together</p>
            <h2>Our farmer programmes</h2>
            <ul className="programme-list">
              <li>
                <strong>200-acre input support programme</strong> in partnership with the Member of Parliament for
                Sunyani West.
              </li>
              <li>
                <strong>200 acres in Ejura in 2026</strong>, growing to 500 acres in 2027 on a five-year maize and
                peanut rotation.
              </li>
              <li>
                <strong>Organic fertilizer</strong> made from our poultry clients' droppings, returned to the farms
                that grow our grain.
              </li>
            </ul>
            <p className="programme-note">
              We especially welcome <strong>women and young farmers</strong> moving into commercial farming.
            </p>
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="cta-light">
        <div className="cta-light-inner">
          <h2>Ready to sell at a fair price?</h2>
          <p>Talk to our team in English or Twi.</p>
          <div className="cta-buttons">
            <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-forest">
              Chat on WhatsApp
            </a>
            <Link to="/contact" className="btn btn-outline-forest">Register your farm</Link>
          </div>
        </div>
      </section>
    </>
  );
}