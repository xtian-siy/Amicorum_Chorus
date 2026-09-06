import { useState } from 'react'
import PageHeader from '../components/layout/PageHeader.jsx'
import PageLayout from '../components/layout/PageLayout.jsx'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const submit = (event) => { event.preventDefault(); setSent(true); event.currentTarget.reset() }
  return (
    <PageLayout>
      <PageHeader eyebrow="Contact & bookings" title="Let’s make something" italic="resonate." copy="Invite Amicorum to sing, ask about an event, or simply begin a conversation." />
      <section className="page-section content-wrap contact-grid">
        <aside><p className="eyebrow">Reach the chorus</p><h2>We’d love to hear from you.</h2><p>For the quickest response, send Amicorum a message through the official Facebook page.</p><a className="button button-gold" href="https://www.facebook.com/profile.php?id=61591881446609" target="_blank" rel="noreferrer">Message on Facebook <span>↗</span></a><div className="contact-note"><span>For invitations</span><p>Include your proposed date, venue, occasion, and the kind of musical support you need.</p></div></aside>
        <form className="contact-form light-form" onSubmit={submit}><p className="form-kicker">Send an inquiry</p><h2>Tell us about your gathering.</h2><div className="field-row"><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label></div><label>What can we help with?<select name="subject" defaultValue="General question"><option>General question</option><option>Concert invitation</option><option>Liturgy or Mass</option><option>Wedding or celebration</option><option>Joining the choir</option></select></label><label>Message<textarea name="message" rows="5" required placeholder="Date, venue, occasion, and anything else we should know." /></label><button className="button button-gold" type="submit">Send inquiry <span>→</span></button>{sent && <p className="success-message" role="status">Thanks for reaching out. This demo form is ready to connect to the choir’s inbox.</p>}</form>
      </section>
    </PageLayout>
  )
}
