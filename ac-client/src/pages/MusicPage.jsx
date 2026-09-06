import { useState } from 'react'
import PageHeader from '../components/layout/PageHeader.jsx'
import PageLayout from '../components/layout/PageLayout.jsx'
import { repertoire } from '../data/repertoire.js'
import coverPhoto from '../assets/images/cover.jpg'

export default function MusicPage() {
  const [open, setOpen] = useState(false)

  return (
    <PageLayout>
      <PageHeader eyebrow="Listen" title="Sacred music," italic="offered with heart." copy="Hear the warmth, prayer, and fellowship at the center of every Amicorum performance." />

      <section className="page-section content-wrap featured-listen">
        <div className="media-frame">
           <img
                      className="hero-image"
                      src={coverPhoto}
                      alt="Amicorum Chorus gathered for a performance"
                    />
          <button type="button" className="play-button" onClick={() => setOpen(true)} aria-label="Open performance preview">▶</button>
        </div>
        <div className="media-copy">
          <p className="eyebrow">Featured performance</p>
          <h2>Ave Verum Corpus</h2>
          <p>A sample presentation showing where an official performance video, program note, and recording credit can live.</p>
          <button className="text-link" type="button" onClick={() => setOpen(true)}>Watch preview <span>↗</span></button>
        </div>
      </section>

      <section className="page-section repertoire-section">
        <div className="content-wrap">
          <header className="repertoire-heading"><p className="eyebrow light">Our repertoire</p><h2>Music for worship,<br /><em>gathering, and reflection.</em></h2><p>These sample categories can be replaced with the choir’s current repertoire and downloadable profile.</p></header>
          <div className="repertoire-grid">
            {repertoire.map((group, index) => (
              <article key={group.category}><span>0{index + 1}</span><h3>{group.category}</h3><ul>{group.pieces.map((piece) => <li key={piece}>{piece}</li>)}</ul></article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section content-wrap page-cta"><p className="eyebrow">Bring the music to your gathering</p><h2>Planning a liturgy, concert, or celebration?</h2><a className="button button-gold" href="/contact">Invite Amicorum <span>→</span></a></section>

      {open && <div className="modal-backdrop" onMouseDown={() => setOpen(false)}><div className="performance-modal" role="dialog" aria-modal="true" aria-labelledby="music-modal-title" onMouseDown={(event) => event.stopPropagation()}><button className="modal-close" type="button" onClick={() => setOpen(false)}>×</button><p className="eyebrow light">Performance preview</p><h2 id="music-modal-title">Your choir video will live here.</h2><p>Connect an official Facebook or YouTube performance when it is ready.</p><a className="button button-gold" href="https://www.facebook.com/profile.php?id=61591881446609" target="_blank" rel="noreferrer">Visit Facebook <span>↗</span></a></div></div>}
    </PageLayout>
  )
}
