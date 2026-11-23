import { Link } from 'react-router-dom';

const stats = [
  {
    num: '40%+',
    title: 'Seasonal maize price swing',
    text: 'Between harvest and the lean season, pushing up the cost of feed, chicken and eggs.',
  },
  {
    num: '30%',
    title: 'Grain lost after harvest',
    text: 'Poor drying and storage destroy up to a third of the crop before it reaches market.',
  },
  {
    num: '18%',
    title: 'Lost to aflatoxin',
    text: 'About 319,000 MT of Ghana\'s maize is contaminated every year.',
  },
  {
    num: '80%+',
    title: 'Of chicken eaten is imported',
    text: "Local poultry can't compete while feed stays expensive and unpredictable.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-maize.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="hero-kicker">Grain bank · Sunyani West, Bono Region</p>
            <h1>
              Ghana's Premier Grain Bank
              <br />
              Quality grain all year
            </h1>
            <p className="hero-lead">
              We buy maize from crop farmers at fair, agreed prices, dry and store in hermetic silos, to supply
              poultry farmers with tested, aflatoxin-free grain through every season.
            </p>
            <p className="hero-ask">Who are you?</p>
            <div className="hero-cards">
              <Link to="/crop-farmers" className="hero-card hero-card-gold">
                <span>I grow maize</span>
                <span>Sell at a fair price →</span>
              </Link>
              <Link to="/poultry-farmers" className="hero-card hero-card-white">
                <span>I raise poultry</span>
                <span>Buy clean, steady grain →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="section section-tint">
        <div className="wrap stack-xl">
          <div className="problem-head">
            <p className="eyebrow">The problem</p>
            <h2 className="h2">Ghana's grain problem, in four numbers</h2>
            <p className="lead">
              Crop farmers sell low at harvest. Poultry farmers pay high in the lean season. Grain is lost in between,
              and the cost ends up in the price of chicken and eggs.
            </p>
          </div>

          <div className="stat-grid">
            {stats.map((s) => (
              <div className="stat" key={s.num}>
                <span className="stat-num">{s.num}</span>
                <span className="stat-title">{s.title}</span>
                <span className="stat-text">{s.text}</span>
              </div>
            ))}
          </div>

          <p className="source-note">
            Sources: SRID/IFPRI; Association of Feed Millers of Ghana (2024); CSIR-STEPRI; Wageningen UR.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="section">
        <div className="wrap stack-xl">
          <div className="solution-head">
            <p className="eyebrow">Our solution</p>
            <h2 className="h2">One grain bank. Two markets made stable.</h2>
            <p className="lead">
              We sit between the farmers who grow maize and the farmers who need it, buying fairly at harvest and
              supplying steadily all year.
            </p>
          </div>

          <div className="split">
            <div className="card-outline">
              <span className="card-tag">For crop farmers</span>
              <h3 className="card-title">A stable market for your harvest</h3>
              <ul className="card-list">
                <li>Guaranteed offtake at pre-agreed, fair prices</li>
                <li>Industrial drying and storage, so no distress sales</li>
                <li>Input support: hybrid seed, fertilizer, extension</li>
              </ul>
              <Link to="/crop-farmers" className="link-arrow">How it works for farmers →</Link>
            </div>

            <div className="grain-bank">
              <span className="grain-bank-title">The GPL grain bank</span>
              <div className="grain-steps">
                <span className="grain-step">DRY to ≤13% moisture</span>
                <span className="grain-step">STORE in hermetic silos</span>
                <span className="grain-step">TEST for aflatoxin &amp; grade</span>
              </div>
            </div>

            <div className="card-outline">
              <span className="card-tag">For poultry farmers</span>
              <h3 className="card-title">Reliable grain for your birds</h3>
              <ul className="card-list">
                <li>Aflatoxin-free maize, lab-tested per lot</li>
                <li>Stable prices through harvest and lean seasons</li>
                <li>Consistent ≤13% moisture: pay for grain, not water</li>
              </ul>
              <Link to="/poultry-farmers" className="link-arrow">How it works for buyers →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="section">
        <div className="wrap impact">
          <div className="impact-copy">
            <p className="eyebrow">The result</p>
            <h2 className="h2">About 10% off the feed bill</h2>
            <p className="lead">
              Maize makes up half of every feed bag, and feed is 60–70% of what it costs to raise poultry. When we cut
              the delivered cost of maize by 18–20%, the whole feed bill falls by roughly 10%.
            </p>
            <Link to="/impact" className="link-arrow">See our full impact →</Link>
          </div>

          <div className="impact-chart">
            <span className="chart-label">Feed cost index (today = 100)</span>
            <div className="bars">
              <div className="bar">
                <span className="bar-value bar-value-muted">100</span>
                <div className="bar-fill bar-fill-muted" style={{ height: 200 }} />
                <span className="bar-name">Today</span>
              </div>
              <div className="bar">
                <span className="bar-value">90</span>
                <div className="bar-fill bar-fill-forest" style={{ height: 180 }} />
                <span className="bar-name">With Grains and Pods</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="section section-cream">
        <div className="wrap facility">
          <img className="facility-img" src="/images/facility.jpg" alt="GPL drying plant and silos" />
          <div className="facility-copy">
            <p className="eyebrow">Tolling Facility</p>
            <h2 className="h2">Built to keep grain safe</h2>
            <div className="tile-grid">
              <div className="tile">
                <span className="tile-num">50 MT</span>
                <span className="tile-label">dried per day</span>
              </div>
              <div className="tile">
                <span className="tile-num">5,500 MT</span>
                <span className="tile-label">silo storage capacity</span>
              </div>
              <div className="tile">
                <span className="tile-num">≤13%</span>
                <span className="tile-label">moisture on release</span>
              </div>
              <div className="tile">
                <span className="tile-num">100%</span>
                <span className="tile-label">of bags traced to the farm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Circular */}
      <section className="section">
        <div className="wrap stack-xl">
          <div className="problem-head">
            <h2 className="h2">Nothing goes to waste</h2>
          </div>
          <div className="circular-grid">
            <div className="circular-card">
              <h3>Poultry waste → organic fertilizer</h3>
              <p>
                Droppings from our poultry clients are composted into organic fertilizer and returned to the farms that
                grow our grain.
              </p>
            </div>
            <div className="circular-card">
              <h3>Corn waste → clean power</h3>
              <p>An on-site digester will turn corn residue into biogas to power our drying plant and silos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="section section-tint trust-section">
        <div className="wrap trust">
          <div className="trust-copy">
            <h2 className="trust-h">Governed with the farmers we serve</h2>
            <p className="lead">Both farmer communities hold seats on our board.</p>
          </div>
          <div className="trust-list">
            <div className="trust-item">
              <strong>Sunyani Maize Farmers Co-operative</strong>
              <br />
              President, board member
            </div>
            <div className="trust-item">
              <strong>Sunyani Poultry Farmers Association</strong>
              <br />
              President, board member
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="cta">
        <img className="cta-bg" src="/images/cta-bg.jpg" alt="" aria-hidden="true" />
        <div className="cta-inner">
          <h2>Grow with us</h2>
          <p>
            Whether you grow grain, feed birds, or want to invest in Ghana's food security, there's a place for you
            here.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-gold">Sell us your grain</Link>
            <Link to="/contact" className="btn btn-white">Buy clean grain</Link>
            <Link to="/contact" className="btn btn-outline">Partner or invest</Link>
          </div>
        </div>
      </section>
    </>
  );
}