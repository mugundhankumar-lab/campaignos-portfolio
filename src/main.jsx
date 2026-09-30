import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const Arrow = ({ className = "" }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Spark = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const services = [
  ["01", "Short-form video", "Reels, Shorts and promotional concepts built around a clear hook, message and CTA."],
  ["02", "Creative & design", "Social creatives, ad concepts, product visuals and campaign-ready brand assets."],
  ["03", "Copy & scripting", "Hooks, scripts, captions, headlines, CTAs and messaging designed for action."],
  ["04", "Paid marketing", "Campaign concepts, ad creative direction and performance-focused marketing support."],
  ["05", "SEO & search", "Keyword thinking, search intent, content ideas and organic growth foundations."],
  ["06", "Lead generation", "Offer, creative and funnel concepts designed to turn attention into qualified interest."]
];

const projects = [
  {
    type: "CONCEPT PROJECT",
    title: "SaaS Launch System",
    tag: "Product marketing",
    text: "A conceptual launch system showing how one product can become a short-form content series, paid creative and landing-page narrative.",
    metrics: ["Hook system", "3 creative angles", "CTA framework"]
  },
  {
    type: "CONCEPT PROJECT",
    title: "Commerce Product Push",
    tag: "E-commerce",
    text: "A product-led creative direction built around demonstration, benefit-led messaging and short-form social content.",
    metrics: ["Demo concept", "Ad copy", "Social creative"]
  },
  {
    type: "CONCEPT PROJECT",
    title: "Local Brand Story",
    tag: "Brand growth",
    text: "A simple storytelling framework for turning a local business proposition into a memorable social campaign.",
    metrics: ["Story angle", "Reel script", "Campaign CTA"]
  },
  {
    type: "CONCEPT PROJECT",
    title: "B2B Demand Engine",
    tag: "Lead generation",
    text: "A B2B campaign concept connecting positioning, LinkedIn content, lead magnet messaging and paid creative.",
    metrics: ["Positioning", "LinkedIn concept", "Lead CTA"]
  }
];

function App() {
  const [menu, setMenu] = React.useState(false);

  return (
    <div className="site">
      <header className="nav">
        <a className="brand" href="#top" aria-label="CampaignOS home">
          <span className="brand-mark">C</span>
          <span>CampaignOS</span>
        </a>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
          <span></span><span></span>
        </button>
        <nav className={menu ? "nav-links open" : "nav-links"}>
          <a href="#work" onClick={() => setMenu(false)}>Work</a>
          <a href="#services" onClick={() => setMenu(false)}>Capabilities</a>
          <a href="#method" onClick={() => setMenu(false)}>Approach</a>
          <a href="#founding" onClick={() => setMenu(false)}>Founding</a>
          <a className="nav-cta" href="mailto:mugundhankumarc@gmail.com">Start a conversation <Arrow /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid"></div>
          <div className="eyebrow"><span className="pulse"></span> Building CampaignOS from the ground up</div>
          <h1>Marketing ideas<br/><em>built to move.</em></h1>
          <p className="hero-copy">
            CampaignOS is a new creative marketing agency bringing <strong>content, creative, paid marketing, SEO and lead generation</strong> into one connected approach.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore our work <Arrow /></a>
            <a className="button ghost" href="#founding">€20 founding collaboration</a>
          </div>
          <div className="hero-note">
            <Spark /> Early-stage by design. We use real collaborations to prove our capabilities, build our portfolio and develop the CampaignOS system.
          </div>
        </section>

        <section className="statement">
          <div className="section-label">01 / The idea</div>
          <div>
            <h2>One business.<br/><span>One connected marketing system.</span></h2>
            <p>
              Great marketing rarely lives in one deliverable. A video needs a message. A message needs an audience. An ad needs a landing page. A campaign needs measurement. CampaignOS connects those decisions so creative work has a reason to exist.
            </p>
          </div>
        </section>

        <section id="work" className="work-section">
          <div className="section-head">
            <div>
              <div className="section-label">02 / Selected work</div>
              <h2>Concepts made to<br/><span>show the thinking.</span></h2>
            </div>
            <p>These are independent concept projects created to demonstrate how CampaignOS approaches different marketing problems. They are not presented as commissioned client work.</p>
          </div>

          <div className="project-grid">
            {projects.map((p, i) => (
              <article className="project-card" key={p.title}>
                <div className={"project-art art-" + i}>
                  <div className="art-top"><span>{p.tag}</span><span>0{i + 1}</span></div>
                  <div className="art-center">
                    <span className="mini-label">CAMPAIGNOS / CONCEPT</span>
                    <strong>{p.title}</strong>
                    <div className="fake-ui">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                </div>
                <div className="project-body">
                  <div className="project-kicker">{p.type}</div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <div className="chips">{p.metrics.map(m => <span key={m}>{m}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="services-section">
          <div className="section-label">03 / Capabilities</div>
          <div className="services-intro">
            <h2>From the first idea<br/><span>to the next action.</span></h2>
            <p>Choose one requirement or combine several. The work starts with the business problem, not with a list of deliverables.</p>
          </div>
          <div className="service-list">
            {services.map(([n, title, text]) => (
              <div className="service-row" key={n}>
                <span className="service-num">{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <Arrow />
              </div>
            ))}
          </div>
        </section>

        <section id="method" className="method-section">
          <div className="method-copy">
            <div className="section-label">04 / Our approach</div>
            <h2>Business →<br/><span>campaign → learning.</span></h2>
            <p>CampaignOS is being built around a connected marketing workflow. Every output should understand what came before it and inform what comes next.</p>
          </div>
          <div className="flow">
            {["Business", "Research", "Strategy", "Creative", "Campaign", "Landing page", "Measure", "Learn"].map((x, i) => (
              <React.Fragment key={x}>
                <div className="flow-node"><span>{String(i + 1).padStart(2, "0")}</span>{x}</div>
                {i < 7 && <div className="flow-line"></div>}
              </React.Fragment>
            ))}
          </div>
        </section>

        <section id="founding" className="founding">
          <div className="founding-glow"></div>
          <div className="section-label">05 / Founding collaboration</div>
          <div className="founding-grid">
            <div>
              <h2>Try the work.<br/><em>Start at €20.</em></h2>
              <p className="big-copy">
                We're building CampaignOS from scratch. Our founding collaboration lets a company choose one practical marketing requirement and experience how we work without a large initial commitment.
              </p>
              <a className="button light" href="mailto:mugundhankumarc@gmail.com?subject=CampaignOS%20Founding%20Collaboration">Tell us what you need <Arrow /></a>
            </div>
            <div className="offer-card">
              <div className="offer-price"><small>from</small><strong>€20</strong></div>
              <div className="offer-line"></div>
              <ul>
                <li><Check /> One selected marketing service</li>
                <li><Check /> Creative / content / copy / marketing support</li>
                <li><Check /> Final digital asset or agreed deliverable</li>
                <li><Check /> Portfolio showcase only with permission</li>
                <li><Check /> Testimonial requested, never required</li>
              </ul>
              <p className="fine">No guaranteed views, leads, sales or reach. The collaboration is focused on useful marketing work and a clear, professional process.</p>
            </div>
          </div>
        </section>

        <section className="proof">
          <div className="section-label">06 / Built honestly</div>
          <div className="proof-grid">
            <div>
              <h2>No inflated<br/><span>case studies.</span></h2>
            </div>
            <div>
              <p>CampaignOS is early-stage. Our concept projects are clearly labelled as concepts. When real founding collaborations are completed, we will only publish work, results or testimonials with the business's permission.</p>
              <div className="proof-points">
                <span>Concepts are labelled.</span>
                <span>Results aren't guaranteed.</span>
                <span>Client work requires permission.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="section-label">07 / Start a project</div>
          <h2>Have a product.<br/><em>Need a campaign?</em></h2>
          <p>Tell CampaignOS what you're trying to promote, improve or create. We'll suggest a practical starting point.</p>
          <a className="button primary large" href="mailto:mugundhankumarc@gmail.com?subject=CampaignOS%20Project%20Enquiry">Start a conversation <Arrow /></a>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <a className="brand" href="#top"><span className="brand-mark">C</span><span>CampaignOS</span></a>
          <p>Creative Marketing & Digital Growth</p>
        </div>
        <div className="footer-contact">
          <a href="mailto:mugundhankumarc@gmail.com">mugundhankumarc@gmail.com</a>
          <a href="https://www.linkedin.com/in/mugundhankumar-c-50b263434" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} CampaignOS. Built from the ground up.</div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
