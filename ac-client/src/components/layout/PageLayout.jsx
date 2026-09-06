import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

export default function PageLayout({ children }) {
  return (
    <div id="top" className="site-shell inner-page">
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  )
}
