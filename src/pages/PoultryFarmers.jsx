import { Link } from 'react-router-dom';

const benefits = [
  {
    title: 'Aflatoxin-free, tested per lot',
    text: 'Only grain within the Ghana Standards Authority limit (15 ppb total aflatoxin) is released. No spending on toxin binders.',
  },
  {
    title: 'Pay for grain, not water',
    text: 'Consistent ≤13% moisture, cleaned and graded. No paying for water, dirt or spoilage.',
  },
  {
    title: 'Healthier flocks',
    text: 'Fewer rejected batches and flock losses, with better growth and laying rates.',
  },
  {
    title: 'Traced to the farm',
    text: 'Every bag comes with an origin record, ready to share on request.',
  },
];

export default function PoultryFarmers() {
  return (
    <>
      {/* Hero */}
      <section className="hero-band hero-green">
        <div className="hero-green-inner">
          <h1>Safe grain at steady prices, all year.</h1>
          <p className="hero-split-lead">
            Aflatoxin-free maize, dried, tested and graded, delivered from our silos all year round, even in the lean
            season.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-gold">Request a supply quote</Link>
            <Link to="/quality" className="btn btn-outline">See our testing</Link>
          </div>
        </div>
      </section>

      {/* Feed cost */}
      <section className="section">
        <div className="feed-grid">
          <img className="portrait-photo" src="/images/maize_visit.jpeg" alt="Grains and Pods team visiting a farmer's maize store" />
          <div className="feed-copy">
            <h2>Feed is most of your cost. We help you keep it steady.</h2>
            <p>
              Feed is 60–70% of what it costs to raise poultry, and maize is half of every feed bag. We buy at harvest
              and store the grain, so your prices hold all year.
            </p>
            <div className="split-stat">
              <span className="split-stat-num">10%</span>
              <span className="split-stat-label">lower overall feed bill</span>
              <span className="split-stat-text">
                Cutting the delivered cost of maize by 18–20% trims the whole feed bill by about 10%.
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* Benefits */}
      <section className="section-mint">
        <div className="section-mint-inner">
          <h2>Why buy from Grains and Pods</h2>
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

      {/* Supply table */}
      <section className="spec-section">
        <div className="spec-inner">
          <h2>What we supply</h2>
          <div className="spec-wrap">
            <table className="spec-table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Moisture</th>
                  <th scope="col">Aflatoxin</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Maize</td>
                  <td>≤13%</td>
                  <td>Within GSA 15 ppb limit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="cta-light">
        <div className="cta-light-inner">
          <h2>Secure your grain supply for the year</h2>
          <p>Tell us your monthly volume and we'll come back with a quote.</p>
          <Link to="/contact" className="btn btn-forest">Request a quote</Link>
        </div>
      </section>
    </>
  );
}