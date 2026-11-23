import { useState } from 'react';
import { Link } from 'react-router-dom';

const steps = [
  {
    title: 'Farm',
    body: 'Each farmer is registered in our network. Every harvest lot is logged by farm, date and quantity, so every bag starts with a known, accountable farm.',
    fact: 'Every farm registered. Every lot logged.',
  },
  {
    title: 'Dry',
    body: 'Our hot-air dryer brings grain to safe moisture within hours of arrival, halting mould growth before it can start.',
    fact: '50 MT a day, dried to 13% moisture or less',
  },
  {
    title: 'Store',
    body: 'Grain is banked in hermetic silos and tagged at every handover, so the farm of origin stays linked the whole way.',
    fact: '5,500 MT of silo capacity',
  },
  {
    title: 'Test',
    body: 'Every lot is tested for aflatoxin and moisture, then graded. Only grain within the Ghana Standards Authority limit is released.',
    fact: 'Within the GSA limit of 15 ppb total aflatoxin',
  },
  {
    title: 'Deliver',
    body: 'Bags reach poultry farmers and feed millers with their origin record attached, ready to share on request.',
    fact: '100% of bags traced to the farm',
  },
];

export default function Traceability() {
  const [active, setActive] = useState(0);
  const current = steps[active];
  const isLast = active === steps.length - 1;

  return (
    <section className="trace-hero">
      <div className="trace-hero-inner">
        <div className="trace-hero-intro">
          <p className="eyebrow">Traceability</p>
          <h1>From a registered farm to your feed mill, every step is recorded</h1>
          <p className="trace-hero-lead">
            Every bag of maize we sell can be traced back to the farm it came from. Tap through each step.
          </p>
        </div>

        <div className="trace-explorer">
          <div className="trace-steps" role="group" aria-label="Steps in the journey of a bag">
            {steps.map((s, k) => (
              <button
                key={s.title}
                type="button"
                className={`trace-step${k === active ? ' is-active' : ''}`}
                aria-pressed={k === active}
                onClick={() => setActive(k)}
              >
                <span className="trace-step-num">0{k + 1}</span>
                <span className="trace-step-title">{s.title}</span>
              </button>
            ))}
          </div>

          <div className="trace-progress" aria-hidden="true">
            <div
              className="trace-progress-bar"
              style={{ transform: `scaleX(${(active + 1) / steps.length})` }}
            />
          </div>

          <div className="trace-detail" role="status" key={active}>
            <div className="trace-detail-copy">
              <span className="trace-detail-title">{current.title}</span>
              <p className="trace-detail-body">{current.body}</p>
            </div>
            <div className="trace-detail-fact">{current.fact}</div>
          </div>

          <button
            type="button"
            className="trace-next"
            onClick={() => setActive((active + 1) % steps.length)}
          >
            {isLast ? 'Start again' : 'Next step →'}
          </button>
        </div>

        <Link to="/quality" className="trace-quality-link">See the science behind our grain →</Link>
      </div>
    </section>
  );
}