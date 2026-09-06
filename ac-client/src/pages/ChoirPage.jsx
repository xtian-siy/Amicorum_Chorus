import PageHeader from '../components/layout/PageHeader.jsx'
import PageLayout from '../components/layout/PageLayout.jsx'
import { members } from '../data/members.js'

export default function ChoirPage() {
  return (
    <PageLayout>
      <PageHeader eyebrow="The ensemble" title="Four voices." italic="One offering." copy="Every section brings a distinct color. Together, they become one living instrument." />

      <section className="page-section content-wrap choir-intro">
        <p className="eyebrow">How we sing</p>
        <h2>Harmony begins with listening—to the score, to the room, and to one another.</h2>
        <p>Amicorum’s sound is formed by singers across four voice sections. This page is ready for member portraits and the conductor’s official biography when those materials are available.</p>
      </section>

      <section className="voice-cards-section page-section">
        <div className="content-wrap voice-card-grid">
          {members.map((voice, index) => (
            <article className="voice-card" key={voice.section}>
              <span className="voice-card-number">0{index + 1}</span>
              <span className="voice-card-initial" aria-hidden="true">{voice.initial}</span>
              <h2>{voice.section}</h2><p className="voice-quality">{voice.quality}</p><p>{voice.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section content-wrap conductor-placeholder">
        <div className="portrait-placeholder"><span>A</span><small>Portrait to come</small></div>
        <div><p className="eyebrow">Musical leadership</p><h2>The person who helps many voices breathe as one.</h2><p>This space is reserved for the conductor’s portrait, biography, musical philosophy, and a short welcome to prospective singers.</p><a className="text-link" href="/join">Sing with us <span>→</span></a></div>
      </section>
    </PageLayout>
  )
}
