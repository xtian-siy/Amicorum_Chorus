import { useState } from 'react'
import PageHeader from '../components/layout/PageHeader.jsx'
import PageLayout from '../components/layout/PageLayout.jsx'

export default function JoinPage() {
  const [sent, setSent] = useState(false)
  const submit = (event) => { event.preventDefault(); setSent(true); event.currentTarget.reset() }
  return (
    <PageLayout>
      <PageHeader eyebrow="Find your place" title="Your voice may be" italic="the one we’re missing." copy="Whether you are returning to music or have sung for years, there may be a seat waiting in the circle." />
      <section className="page-section content-wrap join-grid">
        <div className="join-copy"><p className="eyebrow">Sing with Amicorum</p><h2>Come as you are. Bring curiosity, commitment, and a willingness to listen.</h2><p>This page can hold the choir’s real rehearsal schedule, audition process, age requirements, and membership expectations once confirmed.</p><ol><li><span>01</span><div><strong>Say hello</strong><p>Tell us a little about your voice and musical experience.</p></div></li><li><span>02</span><div><strong>Meet the choir</strong><p>We’ll share the next rehearsal or listening opportunity.</p></div></li><li><span>03</span><div><strong>Find your section</strong><p>Sing with the ensemble and discover where your voice settles.</p></div></li></ol></div>
        <form className="contact-form" onSubmit={submit}><p className="form-kicker">Membership interest</p><h2>Start a conversation.</h2><label>Full name<input name="name" required placeholder="Your name" /></label><label>Email address<input name="email" type="email" required placeholder="you@example.com" /></label><label>Voice section<select name="section" defaultValue=""><option value="" disabled>Select if known</option><option>Soprano</option><option>Alto</option><option>Tenor</option><option>Bass</option><option>Not sure yet</option></select></label><label>A short note<textarea name="message" rows="4" placeholder="Tell us what brings you to Amicorum." /></label><button className="button button-gold" type="submit">Send interest <span>→</span></button>{sent && <p className="success-message" role="status">Thank you. This demo form is ready to connect to the choir’s inbox.</p>}</form>
      </section>
    </PageLayout>
  )
}
