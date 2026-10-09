import type { Metadata } from 'next';
import Deck from './Deck';
import styles from './portfolio.module.css';

export const metadata: Metadata = {
  title: 'Seyi Akadri · Portfolio',
  description:
    'Seyi Akadri builds grounded AI products and researches how to evaluate them: THEO for The Elevation Church, and preprints on evaluability and LLM-judge metrics.',
  openGraph: {
    title: 'Seyi Akadri · Portfolio',
    description: 'Grounded AI products and research on evaluating them.',
    type: 'profile',
  },
};

const STATS = [
  { value: '350', label: 'sermons behind THEO’s answers' },
  { value: '343', label: 'Accelerate 2026 segments indexed' },
  { value: '183', label: 'approved conference moments with audio' },
  { value: '1,170+', label: 'automated tests across the stack' },
];

const BUILT = [
  {
    title: 'Sermon companion',
    text: 'Retrieval over 7,940 passages from 350 sermons, answers that cite the sermon and timestamp, a scripture reader, chat history and memory.',
  },
  {
    title: 'Accelerate 2026 conference app',
    text: 'Transcription, segmentation and speaker attribution for a five-session conference; answers credit the right speaker; worship and messages play from the moment.',
  },
  {
    title: 'Conference moments',
    text: 'An approval workflow with audit history, clips cut automatically on approval, public moment pages and share cards built for WhatsApp.',
  },
  {
    title: 'THEO for Kids',
    text: 'Seeds at Home: a clickable children’s companion that carries the Sunday lesson into the week, built for feedback from the church’s team.',
  },
];

const PLATFORMS = [
  {
    name: 'Dagens',
    tagline: 'Programmable control plane for distributed orchestration',
    text: 'A control-plane runtime for distributed agent and service orchestration, with durable recovery, high-availability failover and first-class human-in-the-loop pause and resume.',
    href: 'https://dagens.aiyify.com',
    host: 'dagens.aiyify.com',
  },
  {
    name: 'Claw Lisp',
    tagline: 'The governed agent runtime',
    text: 'The engine under Achatina. It validates workflow intent before execution, runs agents in a sealed environment, requires human approval before anything is published, and records provenance for audit, including a machine-readable agent bill of materials. Source-available (BSL-1.1); in private development.',
    href: 'https://achatina.aiyify.com',
    host: 'See it in Achatina',
  },
  {
    name: 'Achatina',
    tagline: 'Author governed AI agents in a spreadsheet',
    text: 'Turns a spreadsheet into a governed AI agent: authored by non-engineers, run against any model, driving real tools over MCP and pausing for human approval, with deterministic workflow execution, auditable end to end.',
    href: 'https://achatina.aiyify.com',
    host: 'achatina.aiyify.com',
  },
];

const OFFER = [
  {
    title: 'Your video library, answering questions',
    text: 'Sermons, talks or training sessions become a companion that answers from what was actually said, citing the session and the minute.',
  },
  {
    title: 'Key moments, ready to share',
    text: 'Prophecies, instructions or lessons pulled out as moments with their own audio clip and page, shareable on WhatsApp in one tap.',
  },
  {
    title: 'Your team stays in control',
    text: 'Nothing reaches your audience without approval: a review screen, holds for sensitive content, and a full history of every change.',
  },
  {
    title: 'For churches, companies and workshops',
    text: 'The same approach serves a Sunday sermon series, a company knowledge base or a video-based training programme.',
  },
];

const EMAIL = 'seyi@aiyify.com';
// Set to the full profile URL (https://www.linkedin.com/in/...) to show the link.
const LINKEDIN_URL = 'https://www.linkedin.com/in/seyi-akadri/';

const PAPERS = [
  {
    title:
      'Evaluability Frontiers: A Measurement-and-Attribution Framework for Off-Policy Evaluation under Recommender Feedback Loops',
    finding:
      'Separates whether a recommender is learning the user, narrowing what it shows, or changing the user’s preferences, with four instruments including an evaluability budget and a two-part overlap contract, under a preregistered design.',
    meta: 'Seyi Akadri · Preprint, August 2026 · PDF',
    href: '/research/evaluability-frontiers.pdf',
  },
  {
    title: 'An accuracy–leniency tension in LLM-judge metrics',
    finding:
      'A real LLM judge was either 61% accurate and lenient (approving 26.6% of rejected work) or 99.8% accurate and almost never lenient (0.2%). A human answered all 50 items correctly.',
    meta: 'Seyi Akadri and Edesiri Bridget Nkemnole (University of Lagos) · Preprint, September 2026 · PDF',
    href: '/research/accuracy-leniency-llm-judges.pdf',
  },
];

export default function PortfolioPage() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Portfolio">
        <div className={`${styles.wrap} ${styles.navInner}`}>
          <a href="#top" className={styles.brand}>
            Seyi Akadri<span>.</span>
          </a>
          <div className={styles.navLinks}>
            <a href="#experience">Experience</a>
            <a href="#theo">THEO</a>
            <a href="#presentation">Presentation</a>
            <a href="#platforms">Platforms</a>
            <a href="#research">Research</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <header id="top" className={styles.hero}>
        <div className={styles.wrap}>
          <span className={styles.eyebrow}>Portfolio</span>
          <h1 className={styles.heroTitle}>
            I build <em>grounded AI</em> that people can trust, and research how to measure it.
          </h1>
          <p className={styles.lead}>
            I designed and shipped THEO, The Elevation Church’s AI faith companion, from first prototype to production. I
            build the platforms underneath, Dagens and Achatina, and I write about evaluating AI systems
            honestly: off-policy evaluation under feedback loops, and the limits of LLM-as-judge metrics.
          </p>
          <div className={styles.actions}>
            <a className={styles.btnPrimary} href="#presentation">
              See the THEO presentation
            </a>
            <a className={styles.btnGhost} href="#research">
              Read the research
            </a>
            <a className={styles.btnGhost} href="https://theoai.elevationng.org" target="_blank" rel="noopener noreferrer">
              Visit THEO ↗
            </a>
            <a className={styles.btnGhost} href="#contact">
              Get in touch
            </a>
          </div>
        </div>
      </header>

      <section id="experience" className={styles.section}>
        <div className={styles.wrap}>
          <h2 className={styles.sectionTitle}>Experience</h2>

          <article className={styles.role}>
            <div className={styles.roleHead}>
              <div>
                <h3 className={styles.roleTitle}>GIS Developer · ACReSAL</h3>
                <p className={styles.roleOrg}>
                  Agro-Climatic Resilience in Semi-Arid Landscapes, a World Bank-financed programme of the Federal
                  Government of Nigeria
                </p>
              </div>
              <span className={styles.roleDates}>Oct 2025 – Mar 2026</span>
            </div>
            <div className={styles.roleBody}>
              <ul className={styles.roleList}>
                <li>
                  Built the geospatial platform tracking <strong>972 interventions</strong> across{' '}
                  <strong>19 states</strong>, covering about <strong>844,000 ha</strong> of project impact area.
                </li>
                <li>Architected the backend on Azure with Cosmos DB, and the Next.js front end on Azure Web App.</li>
                <li>Implemented NDVI vegetation analysis and change detection.</li>
                <li>Mapping with interactive web map layers and the Esri ArcGIS Pro suite; built the project’s story maps.</li>
                <li>
                  Developed the mobile data-collection app as a custom KoboToolbox app, self-hosted on an Azure Linux
                  instance.
                </li>
                <li>Integrated the GIS with the project’s MIS, and published it at acresalgis.com.</li>
              </ul>
              <figure className={styles.roleShot}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/portfolio/acresal-dashboard.png"
                  alt="ACReSAL GIS dashboard: 972 project interventions, 843,889 ha total project impact area, with interventions, demographics, catchments and NDVI analysis tabs"
                  loading="lazy"
                />
                <figcaption>The ACReSAL GIS dashboard: interventions, demographics, catchments and NDVI analysis.</figcaption>
              </figure>
            </div>
            <div className={styles.actions}>
              <a className={styles.btnGhost} href="https://www.acresalgis.com" target="_blank" rel="noopener noreferrer">
                ACReSAL GIS ↗
              </a>
              <a className={styles.btnGhost} href="https://acresal.gov.ng" target="_blank" rel="noopener noreferrer">
                acresal.gov.ng ↗
              </a>
            </div>
          </article>

          <article className={styles.role}>
            <div className={styles.roleHead}>
              <div>
                <h3 className={styles.roleTitle}>Builder · THEO, The Elevation Church</h3>
                <p className={styles.roleOrg}>AI faith companion, from first prototype to production</p>
              </div>
              <span className={styles.roleDates}>Nov 2025 – present</span>
            </div>
            <p className={styles.cardText}>
              Retrieval over 350 sermons with cited answers, the Accelerate 2026 conference app, an approval workflow for
              conference moments with audio clips and WhatsApp sharing, and a children’s preview. <a href="#theo">More below</a>.
            </p>
          </article>
        </div>
      </section>

      <section id="theo" className={styles.section}>
        <div className={styles.wrap}>
          <h2 className={styles.sectionTitle}>THEO · The Elevation Church</h2>
          <p className={styles.sectionLead}>
            A faith companion whose answers come from the church’s own teaching, never from guesswork, with the source shown
            beside every answer. In production at theoai.elevationng.org.
          </p>
          <div className={styles.stats}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
          <div className={styles.cards}>
            {BUILT.map((c) => (
              <div key={c.title} className={styles.card}>
                <div className={styles.cardTitle}>{c.title}</div>
                <p className={styles.cardText}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="presentation" className={styles.section}>
        <div className={styles.wrap}>
          <h2 className={styles.sectionTitle}>The presentation</h2>
          <p className={styles.sectionLead}>
            The walkthrough I give of THEO, with screens from the live system. Use the arrows or your keyboard.
          </p>
          <Deck />
        </div>
      </section>

      <section id="bring" className={styles.section}>
        <div className={styles.wrap}>
          <h2 className={styles.sectionTitle}>Bring this to your organisation</h2>
          <p className={styles.sectionLead}>
            THEO started with a church, but the pattern fits anyone whose knowledge lives in video: churches, companies and
            training workshops.
          </p>
          <div className={styles.cards}>
            {OFFER.map((c) => (
              <div key={c.title} className={styles.card}>
                <div className={styles.cardTitle}>{c.title}</div>
                <p className={styles.cardText}>{c.text}</p>
              </div>
            ))}
          </div>
          <div className={styles.actions}>
            <a className={styles.btnPrimary} href={`mailto:${EMAIL}?subject=${encodeURIComponent('THEO for our organisation')}`}>
              Talk to me about your videos
            </a>
          </div>
        </div>
      </section>

      <section id="platforms" className={styles.section}>
        <div className={styles.wrap}>
          <h2 className={styles.sectionTitle}>Platforms</h2>
          <p className={styles.sectionLead}>
            The infrastructure I build for governed, reliable AI agents: Dagens orchestrates, Claw Lisp runs, Achatina
            authors.
          </p>
          <div className={`${styles.cards} ${styles.cards3}`}>
            {PLATFORMS.map((p) => (
              <a key={p.name} className={`${styles.card} ${styles.cardLink}`} href={p.href} target="_blank" rel="noopener noreferrer">
                <div className={styles.cardTitle}>{p.name}</div>
                <div className={styles.cardTagline}>{p.tagline}</div>
                <p className={styles.cardText}>{p.text}</p>
                <span className={styles.paperLink}>{p.host} ↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className={styles.section}>
        <div className={styles.wrap}>
          <h2 className={styles.sectionTitle}>Research</h2>
          <p className={styles.sectionLead}>
            Preprints on measuring AI systems: when evaluation is possible at all, and when the judges we use reward the
            wrong thing.
          </p>
          <div className={styles.papers}>
            {PAPERS.map((p) => (
              <a key={p.href} className={styles.paper} href={p.href} target="_blank" rel="noopener noreferrer">
                <div>
                  <div className={styles.paperTitle}>{p.title}</div>
                  <p className={styles.paperFinding}>{p.finding}</p>
                  <div className={styles.paperMeta}>{p.meta}</div>
                </div>
                <span className={styles.paperLink}>Read the paper ↗</span>
              </a>
            ))}
          </div>
          <h3 className={styles.subTitle}>Open source</h3>
          <a
            className={styles.paper}
            href="https://github.com/confident-ai/deepeval/pull/3392"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <div className={styles.paperTitle}>DeepEval: opt-in judge provenance and replay markers</div>
              <p className={styles.paperFinding}>
                Archives exactly what an LLM judge was asked and answered, and marks cached results as replays, so a metric
                tracked across weeks, model versions or rubric changes can be audited later.
              </p>
              <div className={styles.paperMeta}>Pull request #3392 to confident-ai/deepeval · open</div>
            </div>
            <span className={styles.paperLink}>View the PR ↗</span>
          </a>
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <div className={styles.wrap}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <p className={styles.sectionLead}>For projects, workshops or a demo of THEO with your own videos.</p>
          <div className={styles.actions}>
            <a className={styles.btnPrimary} href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            {LINKEDIN_URL && (
              <a className={styles.btnGhost} href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
            )}
            <a className={styles.btnGhost} href="https://github.com/seyi" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <p>© 2026 Seyi Akadri · aiyify.com</p>
        </div>
      </footer>
    </main>
  );
}
