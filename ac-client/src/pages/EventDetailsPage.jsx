import PageHeader from '../components/layout/PageHeader.jsx'
import PageLayout from '../components/layout/PageLayout.jsx'
import { events } from '../data/events.js'

export default function EventDetailsPage() {
  const event = events[0]
  return (
    <PageLayout>
      <PageHeader eyebrow={`${event.month} ${event.day} · ${event.year}`} title="An Evening of" italic="Sacred Song." copy={event.type}><span className="sample-tag hero-tag">Sample event</span></PageHeader>
      <section className="page-section content-wrap event-detail-grid">
        <aside><p className="eyebrow">At a glance</p><dl><div><dt>Date</dt><dd>December 8, 2026</dd></div><div><dt>Time</dt><dd>{event.time}</dd></div><div><dt>Place</dt><dd>{event.venue}</dd></div><div><dt>Admission</dt><dd>Details to be announced</dd></div></dl></aside>
        <article className="prose event-description"><h2>An evening set apart for listening.</h2><p>This sample event page shows how visitors can move from the homepage or calendar into the complete details for a performance.</p><p>Add the official program, venue address, accessibility notes, ticket link, and participating artists here when confirmed.</p><div className="notice"><strong>Please note</strong><p>This is placeholder event information and is not an official announcement.</p></div><a className="button button-gold" href="/contact">Ask about this event <span>→</span></a></article>
      </section>
      <section className="content-wrap back-row"><a className="text-link" href="/events"><span>←</span> All events</a></section>
    </PageLayout>
  )
}
