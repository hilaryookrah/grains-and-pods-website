import { Link } from 'react-router-dom';

const team = [
  {
    name: 'Timothy Safo',
    role: 'Managing Director',
    bio: '5 years as a grain aggregator. Leads the farmer network and business development.',
    initials: 'TS',
  },
  {
    name: 'Yaw Owusu',
    role: 'Operations Manager',
    bio: 'Oversees procurement, the drying plant and silos, bookkeeping and daily reporting.',
    initials: 'YO',
  },
  {
    name: 'Prince Obeng',
    role: 'Lead Consultant',
    bio: "30+ years' experience. Led three shea butter plants from design to operation. Former Director at Unilever.",
    initials: 'PO',
  },
  {
    name: 'Maud Asubonteng',
    role: 'CEO, Linise Ltd. (partner)',
    bio: '10 years in the maize and poultry trade across Bono and Bono East. MBA Marketing, GIMPA.',
    initials: 'MA',
    tone: 'cream',
  },
  {
    name: 'Adelaide A-Boakye',
    role: 'COO, Linise Ltd. (partner)',
    bio: '10 years in the maize and poultry trade across Bono and Bono East.',
    initials: 'AB',
    tone: 'cream',
  },
];

const values = [
  { label: 'Fairness', text: 'to farmers' },
  { label: 'Quality', text: 'grain in every lot' },
  { label: 'Traceability', text: 'in every bag' },
  { label: 'Sustainability', text: 'in how we work' },
];

function TeamMember({ member }) {
  const hasPhoto = Boolean(member.photo);
  return (
    <div className="member">
      <div
        className={`member-photo${member.tone === 'cream' ? ' member-photo-alt' : ''}`}
        role={hasPhoto ? undefined : 'img'}
        aria-label={hasPhoto ? undefined : `Photo placeholder for ${member.name}`}
      >
        {hasPhoto ? <img src={member.photo} alt={member.name} /> : member.initials}
      </div>
      <strong className="member-name">{member.name}</strong>
      <span className="member-role">{member.role}</span>
      <span className="member-bio">{member.bio}</span>
    </div>
  );
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="page-hero-eyebrow">About us</p>
          <h1>
            We started with a simple question: As a rainfed agricultural economy, why should bumper harvest be a
            curse to the farmer?
          </h1>
          <p className="page-hero-lead">
            Grains and Pods Ltd. is a grain bank based in Mantukwa, Sunyani West, in Ghana's Bono Region. We connect
            two communities that need each other: the farmers who grow maize and the farmers who raise poultry.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="wrap story">
          <div className="story-text">
            <h2 className="h2">Our story</h2>
            <p>
              At harvest time in the Bono Region, there's more maize than buyers. Prices crash. Farmers sell cheap
              because they cannot dry and store grain, and up to a third of it rots before it's sold.
            </p>
            <p>
              A few months later, the maize is gone. Poultry farmers now pay up to 40% more for the same grain, and
              too much of it carries aflatoxin, a poison from mould you can't see.
            </p>
            <p className="story-quote">The same maize, from the same region, and two groups of farmers losing money.</p>
            <p>
              So we built a grain bank. We buy at harvest at a fair price, dry the grain, store it safely, test every
              lot and sell it through the year. Crop farmers get a fair price. Poultry farmers get clean feed. And the
              maize stays in Ghana.
            </p>
          </div>
          <img
            className="story-image"
            src="/images/about-team.jpg"
            alt="The Grains and Pods team with farmers in the field"
          />
        </div>
      </section>

      {/* Mission, vision, values */}
      <section className="values">
        <div className="values-grid">
          <div className="value-card">
            <span className="value-label">Mission</span>
            <p className="value-statement">
              To give crop farmers a stable market and poultry farmers a reliable source of safe, aflatoxin-free
              grain.
            </p>
          </div>
          <div className="value-card">
            <span className="value-label">Vision</span>
            <p className="value-statement">
              A resilient local grain bank feeding our poultry and catalyzing investment in industrial value addition
              processing of grains.
            </p>
          </div>
          <div className="value-card">
            <span className="value-label">What we value</span>
            <p className="value-text">
              {values.map((v, i) => (
                <span key={v.label}>
                  <strong>{v.label}</strong> {v.text}.{i < values.length - 1 ? ' ' : ''}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="wrap stack-xl">
          <div className="team-head">
            <h2 className="h2">Our team</h2>
            <p className="lead">
              Leadership with deep roots in aggregation, operations, processing and the maize and poultry trade.
            </p>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <TeamMember key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="board">
        <div className="board-inner">
          <div className="board-copy">
            <h2>A board that includes the farmers</h2>
            <p>Both of the communities we serve have a voice in how we're run.</p>
          </div>
          <ul className="board-list">
            <li>
              President, <strong>Sunyani Maize Farmers Co-operative</strong>
            </li>
            <li>
              President, <strong>Sunyani Poultry Farmers Association</strong>
            </li>
          </ul>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="page-cta">
        <div className="page-cta-inner">
          <h2>Want to work with us?</h2>
          <Link to="/contact" className="btn btn-forest">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}