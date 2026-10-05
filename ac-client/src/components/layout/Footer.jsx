export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-lead">
        <p className="eyebrow light">Stay in harmony</p>
        <h2>Come hear what friendship can sound like.</h2>
      </div>

      <div className="footer-grid">
        <div>
          <a className="footer-brand" href="/">
            <img src="/images/branding/amicorum-mark.png" alt="" />
            <span className="footer-brand-copy">Amicorum <small>Chorus</small></span>
          </a>
          <p className="footer-note">Sacred music, friendship, and service.</p>
        </div>
        <div className="footer-links">
          <p>Explore</p>
          <a href="/about">Our story</a>
          <a href="/events">Upcoming events</a>
          <a href="/music">Listen</a>
          <a href="/join">Join the choir</a>
        </div>
        <div className="footer-links">
          <p>Connect</p>
          <a href="https://www.facebook.com/profile.php?id=61591881446609" target="_blank" rel="noreferrer">Facebook ↗</a>
          <a href="https://www.instagram.com/amicorumchorus_/" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="/contact">Message us</a>
          <a href="/contact">Book the choir</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Amicorum Chorus</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
