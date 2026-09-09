import PageHeader from "../components/layout/PageHeader.jsx";
import PageLayout from "../components/layout/PageLayout.jsx";
import SectionTitle from "../components/ui/SectionTitle.jsx";
import { members } from '../data/members.js'
import boss from '../assets/images/bossing.jpg'

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Our story"
        title="Music made"
        italic="among friends."
        copy="Amicorum takes its name from the Latin for “of friends”—a simple phrase that describes how we listen, serve, and sing."
      />


      <section className="page-section content-wrap conductor-placeholder">
        <div className="portrait-placeholder" style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>

          <img src={boss} alt="Conductor" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />


        </div>


        <div>
          <p className="eyebrow">Musical leadership</p>
          <h2>The person who helps many voices breathe as one.</h2>
          <p>
            This space is reserved for the conductor’s portrait, biography,
            musical philosophy, and a short welcome to prospective singers.
          </p>
          <a className="text-link" href="/join">
            Sing with us <span>→</span>
          </a>
        </div>
      </section>

      <section className="page-section values-panel">
        <div className="content-wrap">
          <SectionTitle
            eyebrow="What guides us"
            title={
              <>
                Three ideas.
                <br />
                <em>One way of singing.</em>
              </>
            }
            inverse
          />
          <div className="value-grid">
            {[
              [
                "01",
                "Faith",
                "Music as prayer: attentive, generous, and offered with purpose.",
              ],
              [
                "02",
                "Friendship",
                "A welcoming circle in which every voice is heard and supported.",
              ],
              [
                "03",
                "Excellence",
                "Patient rehearsal, thoughtful interpretation, and care for every phrase.",
              ],
            ].map(([number, title, copy]) => (
              <article key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section content-wrap choir-intro">
        <p className="eyebrow">How we sing</p>
        <h2>
          Harmony begins with listening—to the score, to the room, and to one
          another.
        </h2>
        <p>
          Amicorum’s sound is formed by singers across four voice sections. This
          page is ready for member portraits and the conductor’s official
          biography when those materials are available.
        </p>
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

             <section className="page-section content-wrap story-intro">
        <div className="drop-letter" aria-hidden="true">
          A
        </div>
        <div>
          <p className="eyebrow">Who we are</p>
          <h2>
            A choir shaped by faith, friendship, and the joy of a shared song.
          </h2>
        </div>
        <div className="prose">
          <p>
            Amicorum Chorus is a community of singers drawn together by sacred
            music. We believe a choir is at its best when every person listens
            as generously as they sing.
          </p>
          <p>
            This page is ready for the ensemble’s full history: how the first
            rehearsal began, the communities the choir has served, and the
            people who have carried its sound forward.
          </p>
        </div>
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


    </PageLayout>
  );
}
