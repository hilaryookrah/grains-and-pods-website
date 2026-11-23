import { Link } from 'react-router-dom';

const marketStats = [
  { num: '30%', text: "of Ghana's maize is consumed by the poultry sector" },
  { num: '18%', text: "of Ghana's maize is lost every year to aflatoxin" },
  { num: '>80%', text: 'of chicken eaten in Ghana is imported' },
];

const whoBenefits = [
  {
    title: 'Crop farmers',
    points: [
      'Fair, stable farm-gate prices with no distress sales',
      'Lower losses mean more saleable grain per acre',
      'Steady income for school fees, health and reinvestment',
      'Draws youth and women into commercial farming',
    ],
  },
  {
    title: 'Poultry farmers',
    points: [
      'Around 10% lower feed bill and predictable costs',
      'Fewer flock losses from contaminated feed',
      'Safer eggs and meat for Ghanaian families',
      'Local poultry able to compete with imports',
    ],
  },
  {
    title: 'Communities',
    points: [
      'Jobs in aggregation, drying, storage and transport',
      'Local grain replaces imports, so money stays in the region',
      'Less aflatoxin exposure, which is linked to liver cancer and child stunting',
      'A local grain buffer that strengthens food security',
    ],
  },
];

const loops = [
  {
    title: 'Organic fertilizer from poultry waste',
    text: 'We collect droppings from our poultry client farms and compost them into certified organic fertilizer, returning nutrients to the smallholder farms that grow our grain.',
    result: 'By-product → input for 800+ farms',
  },
  {
    title: 'Waste to power',
    text: 'An on-site anaerobic digester turns corn residue and processing waste into biogas, powering the drying plant and silos while cutting emissions.',
    result: 'Corn waste → renewable on-site power',
  },
];

export default function Impact() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Impact &amp; sustainability</p>
          <h1>Keeping value, and food, in our communities</h1>
          <p className="page-hero-lead">
            Grain banks link crop and poultry farmers into one resilient local value chain, so money stays in the region
            instead of leaking to imports.
          </p>
        </div>
      </section>

      {/* Market stats */}
      <section className="impact-stats">
        <div className="impact-stats-grid">
          {marketStats.map((s) => (
            <div className="impact-stat" key={s.num}>
              <span className="impact-stat-num">{s.num}</span>
              <span className="impact-stat-text">{s.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Who benefits */}
      <section className="who-section">
        <div className="who-inner">
          <h2>Who benefits</h2>
          <div className="who-grid">
            {whoBenefits.map((w) => (
              <div className="who-card" key={w.title}>
                <h3>{w.title}</h3>
                <ul>
                  {w.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circular economy */}
      <section className="loop-section">
        <div className="loop-inner">
          <div className="loop-intro">
            <p className="eyebrow">Circular economy</p>
            <h2>Closing the loop between our two farmer communities</h2>
          </div>
          <div className="loop-grid">
            {loops.map((l) => (
              <div className="loop-card" key={l.title}>
                <h3>{l.title}</h3>
                <p>{l.text}</p>
                <span className="loop-result">{l.result}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funders call to action */}
      <section className="impact-cta">
        <div className="impact-cta-inner">
          <div className="impact-cta-copy">
            <h2>Development partners and funders</h2>
            <p>We're looking for partners who share our goal of food security in Ghana.</p>
          </div>
          <Link to="/contact" className="btn btn-forest">Partner with us</Link>
        </div>
      </section>

      <div className="sources-note">
        <p>Sources: Wageningen UR; CSIR-STEPRI / STDF; Food Business MEA (2025).</p>
      </div>
    </>
  );
}