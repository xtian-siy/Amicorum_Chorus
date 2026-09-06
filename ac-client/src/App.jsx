import { useEffect, useState } from 'react'
import AboutPage from './pages/AboutPage.jsx'
import ChoirPage from './pages/ChoirPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import EventDetailsPage from './pages/EventDetailsPage.jsx'
import EventsPage from './pages/EventsPage.jsx'
import GalleryPage from './pages/GalleryPage.jsx'
import HomePage from './pages/HomePage.jsx'
import JoinPage from './pages/JoinPage.jsx'
import MusicPage from './pages/MusicPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import './App.css'

const routes = {
  '/': HomePage,
  '/about': AboutPage,
  '/music': MusicPage,
  '/events': EventsPage,
  '/events/sacred-song': EventDetailsPage,
  '/choir': ChoirPage,
  '/gallery': GalleryPage,
  '/join': JoinPage,
  '/contact': ContactPage,
}

const routeTitles = {
  '/': 'Amicorum Chorus',
  '/about': 'Our Story · Amicorum Chorus',
  '/music': 'Music · Amicorum Chorus',
  '/events': 'Events · Amicorum Chorus',
  '/events/sacred-song': 'An Evening of Sacred Song · Amicorum Chorus',
  '/choir': 'Our Choir · Amicorum Chorus',
  '/gallery': 'Gallery · Amicorum Chorus',
  '/join': 'Join the Choir · Amicorum Chorus',
  '/contact': 'Contact & Bookings · Amicorum Chorus',
}

function cleanPath(pathname) {
  return pathname !== '/' ? pathname.replace(/\/$/, '') : pathname
}

function App() {
  const [path, setPath] = useState(() => cleanPath(window.location.pathname))

  useEffect(() => {
    const onPopState = () => setPath(cleanPath(window.location.pathname))
    const onNavigate = (event) => {
      const link = event.target.closest('a')
      if (!link || link.target || link.hasAttribute('download') || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const url = new URL(link.href, window.location.href)
      if (url.origin !== window.location.origin || !routes[cleanPath(url.pathname)]) return
      if (cleanPath(url.pathname) === cleanPath(window.location.pathname) && url.hash) return

      event.preventDefault()
      window.history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`)
      setPath(cleanPath(url.pathname))
    }

    window.addEventListener('popstate', onPopState)
    document.addEventListener('click', onNavigate)
    return () => {
      window.removeEventListener('popstate', onPopState)
      document.removeEventListener('click', onNavigate)
    }
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.title = routeTitles[path] || 'Page not found · Amicorum Chorus'
  }, [path])

  const Page = routes[path] || NotFoundPage
  return <Page />
}

export default App
