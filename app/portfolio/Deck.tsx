'use client';

import { useCallback, useEffect, useState } from 'react';
import styles from './portfolio.module.css';

type Slide = {
  kicker: string;
  title: string;
  text: string;
  media: React.ReactNode;
};

const IMG = (src: string, alt: string, tall = false) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={src} alt={alt} style={tall ? { maxHeight: '100%', width: 'auto' } : undefined} loading="lazy" />
);

const SLIDES: Slide[] = [
  {
    kicker: 'THEO · The Elevation Church',
    title: 'A faith companion built on a church’s own teaching',
    text: 'Live at theoai.elevationng.org. Answers come from Pastor Godman Akinlabi’s sermons and TEC’s doctrine, with the source shown beside every answer.',
    media: IMG('/portfolio/theo-signin.png', 'THEO sign-in page in The Elevation Church branding'),
  },
  {
    kicker: 'Accelerate 2026',
    title: 'The conference, ready to revisit',
    text: 'Wednesday to Friday sessions transcribed and indexed (343 segments, 10 speakers). THEO answers from what was preached and credits the right speaker.',
    media: IMG('/portfolio/accelerate-home.png', 'Accelerate Conference 2026 app with sessions by day'),
  },
  {
    kicker: 'Accelerate 2026',
    title: 'Every session, playable where it matters',
    text: 'Each session page carries the recording and its messages, each opening at the moment it starts.',
    media: IMG('/portfolio/accelerate-session.png', 'Session page with video and messages'),
  },
  {
    kicker: 'Asking THEO · live answer',
    title: 'From a question to the moments that answer it',
    text: 'Ask for a speaker’s key moments and THEO lists the curated moments with speaker and time, each with a card to listen and share.',
    media: (
      <div className={styles.chatMock} role="img" aria-label="THEO listing Bishop Oyedepo's key moments">
        <div className={styles.chatQ}>List the key moments for Bishop Oyedepo at the Accelerate 2026 conference</div>
        <div>Here are the key moments from Bishop David Oyedepo at the Accelerate Conference:</div>
        <div className={styles.chatGroup}>Prayer</div>
        <div>Opening thanksgiving: going forward with good speed (Friday morning, 3:00:06)</div>
        <div className={styles.chatGroup}>Prophecy</div>
        <div>Greater days for this ministry (3:02:39) · Your life will never lack answers again (3:32:29)</div>
        <div className={styles.chatGroup}>Key moment</div>
        <div>The Bible is a prophetic resource bank (3:04:47) · Every prophecy is a covenant with conditions (3:07:42)</div>
      </div>
    ),
  },
  {
    kicker: 'Editorial control',
    title: 'Nothing reaches members without approval',
    text: '192 moments drafted from the transcripts; an approver reviews each against the transcript, adjusts timing, and approves, rejects or holds it. Every change is audited.',
    media: IMG('/portfolio/moments-review.png', 'Approver review screen with transcript and timing controls'),
  },
  {
    kicker: 'Share a moment',
    title: 'One tap from WhatsApp to the word',
    text: 'Each approved moment has its own audio clip and public page, and a preview card designed to survive WhatsApp’s square crop.',
    media: IMG('/portfolio/share-card.png', 'WhatsApp preview card for a conference moment'),
  },
  {
    kicker: 'THEO for Kids · preview',
    title: 'Seeds at Home',
    text: 'A children’s companion that carries Sunday’s Seeds lesson into the week: age-group profiles, stars for progress, and a parent area.',
    media: IMG('/portfolio/kids-phone.png', 'THEO for Kids home screen with Lion, Eagle and Star profiles', true),
  },
  {
    kicker: 'Engineering',
    title: 'Built to run in production',
    text: 'Every change goes through CI; phone layouts are tested in iPhone and Android browser engines; every release keeps a rollback image, and answers are re-checked against a baseline after each deploy.',
    media: (
      <div className={styles.bigNumbers}>
        <div>
          <strong>1,170+</strong>
          <span>automated tests</span>
        </div>
        <div>
          <strong>100+</strong>
          <span>reviewed pull requests</span>
        </div>
        <div>
          <strong>10/10</strong>
          <span>baseline after each deploy</span>
        </div>
      </div>
    ),
  },
];

export default function Deck() {
  const [i, setI] = useState(0);
  const go = useCallback((n: number) => setI((n + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(i + 1);
      if (e.key === 'ArrowLeft') go(i - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [i, go]);

  const s = SLIDES[i];
  return (
    <div className={styles.deck} aria-roledescription="carousel" aria-label="THEO presentation">
      <div className={styles.slide} aria-roledescription="slide" aria-label={`${i + 1} of ${SLIDES.length}`}>
        <div className={styles.slideCopy}>
          <span className={styles.slideKicker}>{s.kicker}</span>
          <h3 className={styles.slideTitle}>{s.title}</h3>
          <p className={styles.slideText}>{s.text}</p>
        </div>
        <div className={styles.slideMedia}>{s.media}</div>
      </div>
      <div className={styles.deckBar}>
        <button type="button" className={styles.deckBtn} onClick={() => go(i - 1)} aria-label="Previous slide">
          ← Prev
        </button>
        <div className={styles.dots}>
          {SLIDES.map((_, n) => (
            <button
              key={n}
              type="button"
              className={`${styles.dot} ${n === i ? styles.dotActive : ''}`}
              onClick={() => go(n)}
              aria-label={`Slide ${n + 1}`}
              aria-current={n === i}
            />
          ))}
        </div>
        <button type="button" className={styles.deckBtn} onClick={() => go(i + 1)} aria-label="Next slide">
          Next →
        </button>
      </div>
    </div>
  );
}
