import PageHeader from "../components/layout/PageHeader.jsx";
import PageLayout from "../components/layout/PageLayout.jsx";
import SectionTitle from "../components/ui/SectionTitle.jsx";
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


      {/* Replace these statements and the photo frame when the official content is ready. */}
      <section className="page-section content-wrap vision-mission-section">
        <div className="vision-mission-copy">
          <p className="eyebrow">Our purpose</p>
          <h2>
            Our vision.
            <br />
            <em>Our mission.</em>
          </h2>
          <div className="vision-mission-statement">
            <span>01 / Vision</span>
            <h3>Vision</h3>
            <p>The choir’s official vision statement will be placed here.</p>
          </div>
          <div className="vision-mission-statement">
            <span>02 / Mission</span>
            <h3>Mission</h3>
            <p>The choir’s official mission statement will be placed here.</p>
          </div>
        </div>
        <figure className="vision-mission-photo" aria-label="Placeholder for a future choir photograph">
          <span aria-hidden="true">AC</span>
          <figcaption>Choir photo to come</figcaption>
        </figure>
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
