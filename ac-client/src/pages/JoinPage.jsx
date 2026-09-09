import PageHeader from "../components/layout/PageHeader.jsx";
import PageLayout from "../components/layout/PageLayout.jsx";
import { joinRegistration } from "../data/join.js";
import defaultQrCodeImage from "../assets/images/qr.png";

export default function JoinPage() {
  const formUrl = joinRegistration.googleFormUrl.trim();
  const qrImageSrc = joinRegistration.qrCodeImage.trim() || defaultQrCodeImage;
  const hasFormLink = /^https?:\/\//i.test(formUrl);
  const hasQrCode = Boolean(qrImageSrc);

  return (
    <PageLayout>
      <PageHeader
        eyebrow="Find your place"
        title="Your voice may be"
        italic="the one we’re missing."
        copy="Whether you are returning to music or have sung for years, there may be a seat waiting in the circle."
      />

      <section className="page-section content-wrap join-grid">
        <div className="join-copy">
          <p className="eyebrow">Sing with Amicorum</p>
          <h2>
            Come as you are. Bring curiosity, commitment, and a willingness to
            listen.
          </h2>
          <p>
            Register through our Google Form, then we’ll get in touch with the
            next rehearsal or listening opportunity.
          </p>
          <ol>
            <li>
              <span>01</span>
              <div>
                <strong>Open the form</strong>
                <p>Scan the QR code or use the registration button.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <strong>Share your details</strong>
                <p>Tell us about your voice and musical experience.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <strong>Meet the choir</strong>
                <p>We’ll contact you with the next step and rehearsal details.</p>
              </div>
            </li>
          </ol>
        </div>

        <aside className="join-registration" aria-labelledby="registration-title">
          <p className="form-kicker">Membership registration</p>
          <h2 id="registration-title">Begin your journey.</h2>

          <div className="join-qr-frame">
            {hasQrCode ? (
              hasFormLink ? (
                <a href={formUrl} target="_blank" rel="noreferrer" aria-label="Open the Amicorum registration form">
                  <img src={qrImageSrc} alt="QR code for the Amicorum Chorus registration form" />
                </a>
              ) : (
                <img src={qrImageSrc} alt="QR code for the Amicorum Chorus registration form" />
              )
            ) : (
              <div className="join-qr-placeholder">
                <img src="/images/branding/amicorum-mark.png" alt="" />
                <span>Registration QR code</span>
                <small>Coming soon</small>
              </div>
            )}
          </div>

          <p className="join-registration-copy">
            Scan with your phone camera, or open the same registration form in
            your browser.
          </p>

          {hasFormLink ? (
            <>
              <a className="button button-gold join-form-button" href={formUrl} target="_blank" rel="noreferrer">
                Open Google Form <span>↗</span>
              </a>

            </>
          ) : (
            <div className="join-registration-pending" role="status">
              <strong>Registration link coming soon</strong>
              <p>Add the public Google Forms URL to activate this button.</p>
            </div>
          )}
        </aside>
      </section>
    </PageLayout>
  );
}
