import { Link } from 'react-router-dom';

const science = [
  {
    num: '50',
    unit: 'MT / day',
    title: 'Industrial drying plant',
    text: 'A hot-air dryer brings grain to safe moisture (≤13.5%), halting mould growth before storage.',
  },
  {
    num: '5,500',
    unit: 'MT',
    title: 'Hermetic silo storage',
    text: '2,000 MT operated by GPL, plus 3,500 MT through our partnership with Linise Ltd.',
  },
  {
    num: '15',
    unit: 'ppb',
    title: 'Quality assurance',
    text: 'Every lot is tested for aflatoxin and moisture, then graded. Only grain within the Ghana Standards Authority limit is released.',
  },
];

const traceSteps = [
  {
    label: 'At the farm',
    text: 'Each farmer is registered in our network. Every harvest lot is logged by farm, date and quantity.',
  },
  {
    label: 'At the grain bank',
    text: 'Bags are tagged at aggregation, drying and storage. The farm of origin stays linked at every handover.',
  },
  {
    label: 'At delivery',
    text: 'Bags reach buyers with an origin record, ready to share with regulators or customers on request.',
  },
];

export default function Quality() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Quality &amp; traceability</p>
          <h1>Every tonne dried, stored and tested before it leaves us</h1>
          <p className="page-hero-lead">
            Scientifically controlled post-harvest handling, and a record that follows every bag from the farm to your
            door.
          </p>
        </div>
      </section>

      {/* Science */}
      <section className="quality-section">
        <div className="quality-inner">
          <h2>The science behind our grain</h2>
          <div className="science-grid">
            {science.map((s) => (
              <div className="science-card" key={s.title}>
                <span className="science-num">
                  {s.num}
                  <span className="science-unit">{s.unit}</span>
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <img
            className="quality-photo"
            src="/images/facility.jpg"
            alt="GPL drying plant and silos"
          />
        </div>
      </section>

      {/* Traceability */}
      <section className="section-mint">
        <div className="section-mint-inner">
          <div className="trace-head">
            <div className="trace-intro">
              <h2>Every bag, traced to its farm</h2>
              <p>
                A one-to-one link between every bag and a registered farm record. If a problem ever appears, we can
                find and pull the affected lot quickly.
              </p>
            </div>
            <div className="trace-stats">
              <div className="trace-stat">
                <span className="trace-stat-num">100%</span>
                <span className="trace-stat-label">of bags traced</span>
              </div>
              <div className="trace-stat">
                <span className="trace-stat-num">1:1</span>
                <span className="trace-stat-label">bag to farm record</span>
              </div>
            </div>
          </div>
          <div className="trace-grid">
            {traceSteps.map((t) => (
              <div className="trace-card" key={t.label}>
                <span className="trace-label">{t.label}</span>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="quality-cta">
        <div className="quality-cta-inner">
          <h2>Want to see a test report for your order?</h2>
          <Link to="/contact" className="btn btn-forest">Talk to our team</Link>
        </div>
      </section>
    </>
  );
}