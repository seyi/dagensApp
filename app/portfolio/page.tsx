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

const PAPERS = [
  {
    title: 'Evaluability Frontiers: Measuring Off-Policy Evaluation under Recommender Feedback Loops',
    meta: 'Preprint · PDF',
    href: '/research/evaluability-frontiers.pdf',
  },
  {
    title: 'An accuracy–leniency tension in LLM-judge metrics',
    meta: 'Preprint · PDF',
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
            <a href="#theo">THEO</a>
            <a href="#presentation">Presentation</a>
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
            I designed and shipped THEO, The Elevation Church’s AI faith companion, from first prototype to production, and I
            write about evaluating AI systems honestly: off-policy evaluation under feedback loops, and the limits of
            LLM-as-judge metrics.
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
          </div>
        </div>
      </header>

      <section id="theo" className={styles.section}>
        <div className={styles.wrap}>
          <h2 className={styles.sectionTitle}>THEO · The Elevation Church</h2>
          <p className={styles.sectionLead}>
            A faith companion whose answers come from the church’s own teaching, never from guesswork, with the source shown
            beside every answer. Live in production since 2026.
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
                  <div className={styles.paperMeta}>{p.meta}</div>
                </div>
                <span className={styles.paperLink}>Read the paper ↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className={styles.footer}>
        <div className={styles.wrap}>
          <p>
            Seyi Akadri · <a href="https://github.com/seyi">github.com/seyi</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
