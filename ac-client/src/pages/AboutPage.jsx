import PageHeader from '../components/layout/PageHeader.jsx'
import PageLayout from '../components/layout/PageLayout.jsx'
import SectionTitle from '../components/ui/SectionTitle.jsx'

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Our story"
        title="Music made"
        italic="among friends."
        copy="Amicorum takes its name from the Latin for “of friends”—a simple phrase that describes how we listen, serve, and sing."
      />

      <section className="page-section content-wrap story-intro">
        <div className="drop-letter" aria-hidden="true">A</div>
        <div>
          <p className="eyebrow">Who we are</p>
          <h2>A choir shaped by faith, friendship, and the joy of a shared song.</h2>
        </div>
        <div className="prose">
          <p>Amicorum Chorus is a community of singers drawn together by sacred music. We believe a choir is at its best when every person listens as generously as they sing.</p>
          <p>This page is ready for the ensemble’s full history: how the first rehearsal began, the communities the choir has served, and the people who have carried its sound forward.</p>
        </div>
      </section>

      <section className="page-section values-panel">
        <div className="content-wrap">
          <SectionTitle eyebrow="What guides us" title={<>Three ideas.<br /><em>One way of singing.</em></>} inverse />
          <div className="value-grid">
            {[
              ['01', 'Faith', 'Music as prayer: attentive, generous, and offered with purpose.'],
              ['02', 'Friendship', 'A welcoming circle in which every voice is heard and supported.'],
              ['03', 'Excellence', 'Patient rehearsal, thoughtful interpretation, and care for every phrase.'],
            ].map(([number, title, copy]) => (
              <article key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section content-wrap split-callout">
        <div>
          <p className="eyebrow">The sound we share</p>
          <h2>Meet the people behind the harmony.</h2>
        </div>
        <div><p>Explore the four sections that make one ensemble, or find out how to add your own voice.</p><a className="button button-gold" href="/choir">Meet the choir <span>→</span></a></div>
      </section>
    </PageLayout>
  )
}
