# Amicorum Chorus project structure

Based on the shared plan: https://chatgpt.com/share/6a9d7d7a-cd7c-83ec-83e7-b307f0217430

The existing Vite application remains the entry point. This scaffold organizes future work; it does not yet implement the website or connect the new pages to routes.

| Location | Purpose |
| --- | --- |
| `public/favicon/` | Site icons |
| `public/images/branding/` | Choir logos and church emblem |
| `public/images/hero/` | Homepage and performance hero photos |
| `public/images/choir/` | Group and rehearsal photos |
| `public/images/members/` | Conductor photo and soprano, alto, tenor, bass portraits |
| `public/images/events/` | Concert, Mass, and wedding images |
| `public/images/gallery/` | Albums organized under 2024, 2025, and 2026 |
| `public/videos/` | Local videos |
| `public/documents/` | Choir profile and repertoire PDFs |
| `src/assets/` | Assets imported by source code, including icons and decorations |
| `src/components/` | Layout, home, events, choir, music, gallery, contact, and shared UI components |
| `src/pages/` | Home, About, Choir, Music, Events, Event Details, Gallery, Album, Join, Booking, Contact, and Not Found pages |
| `src/sections/` | History and ministry sections |
| `src/data/` | Members, events, repertoire, performances, gallery, social links, and navigation |
| `src/hooks/` | Future scroll position and document title hooks |
| `src/utils/` | Future date formatting and constants |
| `src/styles/` | Future global styles and animations |

## Scaffold conventions

- Components and pages export named functions that currently return `null`.
- Data files export empty named arrays. Add verified choir content when available.
- Hook and utility files are marked stubs with no behavior yet.
- The new CSS files are placeholders and are not imported yet.
- Empty asset directories contain `.gitkeep` files so Git can track them.
- Existing application files, assets, and package dependencies are preserved.
- `.env` is local and ignored by Git; `.env.example` documents future configuration.
- Tailwind CSS, React Router, Lucide React, and Framer Motion are part of the proposed stack but are not installed by this folder scaffold.

## Planned media filenames

Add actual assets when available; empty image, video, or PDF files are not created.

```text
public/favicon/favicon.ico
public/favicon/apple-touch-icon.png
public/images/branding/amicorum-logo.png
public/images/branding/amicorum-logo-white.png
public/images/branding/church-emblem.png
public/images/hero/choir-hero.jpg
public/images/hero/church-performance.jpg
public/images/hero/christmas-performance.jpg
public/images/choir/group-photo-01.jpg
public/images/choir/group-photo-02.jpg
public/images/choir/rehearsal.jpg
public/images/members/conductor.jpg
public/images/events/concert-01.jpg
public/images/events/mass-01.jpg
public/images/events/wedding-01.jpg
public/videos/hero-video.mp4
public/documents/choir-profile.pdf
public/documents/repertoire.pdf
src/assets/decorative/cross.svg
src/assets/decorative/music-note.svg
src/assets/decorative/staff-lines.svg
```