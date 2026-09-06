import PageHeader from '../components/layout/PageHeader.jsx'
import PageLayout from '../components/layout/PageLayout.jsx'
import { events, pastEvents } from '../data/events.js'

export default function EventsPage() {
  return (
    <PageLayout>
      <PageHeader eyebrow="Gather with us" title="Come and hear" italic="the chorus." copy="Concerts, liturgies, and gatherings where music draws a community together." />

      <section className="page-section content-wrap events-list-section">
        <div className="list-heading"><p className="eyebrow">On the calendar</p><p>Dates shown below are sample content until the choir’s official calendar is connected.</p></div>
        <div className="event-list">
          {events.map((event) => (
            <article className="event-list-card" key={event.slug}>
              <div className="event-list-date"><span>{event.month}</span><strong>{event.day}</strong><small>{event.year}</small></div>
              <div><span className="sample-tag dark">{event.status}</span><p>{event.type}</p><h2>{event.title}</h2><dl><div><dt>Time</dt><dd>{event.time}</dd></div><div><dt>Place</dt><dd>{event.venue}</dd></div></dl></div>
              <a className="round-link dark" href={`/events/${event.slug}`}><span>View<br />details</span><i>↗</i></a>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section archive-section"><div className="content-wrap"><p className="eyebrow light">From the archive</p><div className="archive-list">{pastEvents.map((event) => <article key={event.title}><span>{event.year}</span><h3>{event.title}</h3><p>{event.type}</p></article>)}</div><small className="sample-note">Sample archive titles shown for layout only.</small></div></section>
    </PageLayout>
  )
}
