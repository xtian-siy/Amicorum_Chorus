import PageLayout from '../components/layout/PageLayout.jsx'

export default function NotFoundPage() {
  return <PageLayout><section className="not-found"><p className="eyebrow light">404 · Off score</p><h1>This page missed its entrance.</h1><p>The page you’re looking for may have moved, but the music continues.</p><a className="button button-gold" href="/">Return home <span>→</span></a></section></PageLayout>
}
