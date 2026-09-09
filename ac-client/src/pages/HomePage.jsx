import { useState } from 'react'
import Footer from '../components/layout/Footer.jsx'
import Navbar from '../components/layout/Navbar.jsx'
import SectionTitle from '../components/ui/SectionTitle.jsx'
import coverPhoto from '../assets/images/cover.jpg'
import acLogo from '../assets/images/ac-logo.jpg'
import sahig from '../assets/images/sahig.jpg'
import perf from '../assets/images/in_perf.jpg'

const voices = [
  { name: 'Soprano', line: 'Light · clarity · lift', note: 'S' },
  { name: 'Alto', line: 'Warmth · color · depth', note: 'A' },
  { name: 'Tenor', line: 'Energy · line · brilliance', note: 'T' },
  { name: 'Bass', line: 'Foundation · resonance · rest', note: 'B' },
]


export default function HomePage() {


  const [showPerformance, setShowPerformance] = useState(false)

  return (
    <div id="top" className="site-shell">
      <Navbar />

      <main id="main-content">
        <section className="hero-section" aria-labelledby="hero-title">
          <video
            className="hero-image"
            autoPlay
            muted
            loop
            playsInline
            poster={coverPhoto}
          >
            <source src="/videos/amicorum-hero.mp4" type="video/mp4" />
          </video>


          <div className="hero-shade" />
          <div className="hero-ornament" aria-hidden="true"><span>✦</span></div>
          <div className="hero-content">
            <p className="eyebrow light">Sacred music · Friendship · Service</p>
            <h1 id="hero-title">Where friendship<br />finds its <em>voice.</em></h1>
            <p className="hero-copy">We sing together in faith, offering music that lifts the heart and gathers people into one community.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="/music">Hear the chorus <span>▶</span></a>
              <a className="text-link light" href="/join">Sing with us <span>↗</span></a>
            </div>
          </div>
          <div className="hero-footer" aria-label="Choir values">
            <span>01 <strong>Faith</strong></span>
            <span>02 <strong>Friendship</strong></span>
            <span>03 <strong>Excellence</strong></span>
          </div>
        </section>

        <section id="about" className="intro-section content-wrap">
          <p className="vertical-word" aria-hidden="true">AMICORUM</p>

          <div className="intro-kicker">

          <img src={acLogo} alt="ac-logo"/>


          </div>
          <div className="intro-copy">
            <p className="eyebrow">Our story</p>
            <h2>Music brought us together.<br /><em>Faith gives it purpose.</em></h2>
            <p>Amicorum means “of friends.” In every rehearsal, liturgy, and performance, we seek the rare harmony that comes from listening deeply—to the music, to one another, and to something greater than ourselves.</p>
            <a className="text-link" href="/about">Read our story <span>→</span></a>
          </div>
        </section>


{/* make a dynamic announcement */}
        <section id="events" className="event-section">
          <div className="content-wrap">
            <div className="event-topline">
              <p className="eyebrow light">Gather with us</p>

            </div>
            <div className="event-layout">
              <div className="event-date" aria-label="Sample date, December 8">
                <span>SEP</span>
                <strong>12</strong>
                <small>2026</small>
              </div>
              <div className="event-details">
                <p className="event-type">A concert of sacred choral music</p>
                <h2>An Evening of<br /><em>Sacred Song</em></h2>
                <div className="event-meta">
                  <p><span>Time</span> 7:00 in the evening</p>
                  <p><span>Place</span> Parish church · Venue to be announced</p>
                </div>
              </div>
              <div className="event-action">
                <a className="round-link" href="/events/sacred-song" aria-label="View sample event details"><span>View<br />details</span><i>↗</i></a>
              </div>
            </div>
          </div>
        </section>

        <section id="music" className="performance-section content-wrap">
          <SectionTitle
            eyebrow="Listen"
            title={<>Sacred music,<br /><em>offered with heart.</em></>}
            copy="A glimpse of the warmth, prayer, and fellowship at the center of every Amicorum performance."
          />
          <button className="performance-card" type="button" onClick={() => setShowPerformance(true)} aria-label="Open sample performance">
           <img
            className="hero-image"
            src={sahig}
            alt="Amicorum Chorus gathered for a performance"
          />
            <span className="performance-overlay" />
            <span className="play-button"><i>▶</i></span>
            <span className="performance-caption">
              <small>Featured performance</small>
              <strong>One Voice27</strong>

            </span>
          </button>
        </section>

        <section id="choir" className="choir-section">
          <div className="content-wrap">
            <SectionTitle
              eyebrow="The ensemble"
              title={<>Four voices.<br /><em>One offering.</em></>}
              copy="Each section brings its own color. Together, they become one living instrument."
              inverse
            />
            <div className="voice-list">
              {voices.map((voice, index) => (
                <article className="voice-row" key={voice.name}>
                  <span className="voice-number">0{index + 1}</span>
                  <span className="voice-note" aria-hidden="true">{voice.note}</span>
                  <h3>{voice.name}</h3>
                  <p>{voice.line}</p>
                  <a href="/join" aria-label={`Learn about singing ${voice.name}`}>↗</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery-section content-wrap">
          <div className="gallery-heading">
            <SectionTitle eyebrow="Moments in harmony" title={<>Life between<br /><em>the notes.</em></>} />
            <p>Rehearsals, celebrations, prayer, and friendship—these are the moments that shape our sound.</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-photo gallery-photo-main">
             <img
            className="hero-image"
            src={perf}
            alt="Amicorum Chorus gathered for a performance"
          />
              <span>In performance <i>↗</i></span>
            </div>
            <div className="gallery-quote">
              <span aria-hidden="true">“</span>
              <blockquote>When every voice listens, friendship becomes harmony.</blockquote>
              <p>— Amicorum Chorus</p>
            </div>
            <div className="gallery-detail" aria-label="Decorative musical detail">
              <span className="staff-lines" aria-hidden="true">♪</span>
              <p>Rehearsal<br /><em>to reverence</em></p>
            </div>
          </div>
          <a className="text-link gallery-more" href="/gallery">Explore the gallery <span>→</span></a>
        </section>

        <section id="join" className="join-section">
          <div className="join-rings" aria-hidden="true"><i /><i /><i /></div>
          <div className="content-wrap join-content">
            <p className="eyebrow light">Find your place in the harmony</p>
            <h2>Your voice may be<br />the one we’re <em>missing.</em></h2>
            <p>Whether you are returning to music or have sung for years, there is a seat waiting in the circle.</p>
            <a className="button button-ivory" href="/join">Join Amicorum <span>→</span></a>
          </div>
        </section>
      </main>

      <Footer />

      {showPerformance && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setShowPerformance(false)}>
          <div className="performance-modal" role="dialog" aria-modal="true" aria-labelledby="performance-title" onMouseDown={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setShowPerformance(false)} aria-label="Close">×</button>
            <p className="eyebrow light">Performance preview</p>

            <h2 id="performance-title">Get updates on our latest performance.</h2>
            <p>Check out our latest performance on Facebook!</p>
            <a className="button button-gold" href="https://www.facebook.com/reel/2169945600227260" target="_blank" rel="noreferrer">Visit Facebook Post<span>↗</span></a>
          </div>
        </div>
      )}
    </div>
  )
}
