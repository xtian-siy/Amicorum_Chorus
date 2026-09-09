import { useState } from "react";
import PageHeader from "../components/layout/PageHeader.jsx";
import PageLayout from "../components/layout/PageLayout.jsx";
import { gallery } from "../data/gallery.js";


export default function GalleryPage() {
  const [selected, setSelected] = useState(null);
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Moments in harmony"
        title="Life between"
        italic="the notes."
        copy="Rehearsals, celebrations, prayer, and friendship—the moments that shape our sound."
      />
      <section className="page-section content-wrap gallery-page-section">
        <div className="list-heading">
          <p className="eyebrow">The choir in community</p>
          <p>
              The current gallery uses one sample image with varied crops. Replace
              each tile as official photography becomes available.
          </p>
        </div>
        <div className="gallery-page-grid">
          {gallery.map((item, index) => (
            <button
              type="button"
              className={`gallery-tile gallery-tile-${index + 1}`}
              key={item.title}
              onClick={() => setSelected(item)}
            >
              <img
                src={item.image}
                alt={item.caption}
                style={{ objectPosition: item.position }}
              />
              <span>
                <small>0{index + 1}</small>
                <strong>{item.title}</strong>
                <i>View ↗</i>
              </span>
            </button>
          ))}
        </div>
      </section>
      {selected && (
        <div
          className="modal-backdrop gallery-lightbox"
          onMouseDown={() => setSelected(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              onClick={() => setSelected(null)}
            >
              ×
            </button>
            <img
              src={selected.image}
              alt={selected.caption}
              style={{ objectPosition: selected.position }}
            />
            <p>
              <strong>{selected.title}</strong>
              <span>{selected.caption}</span>
            </p>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
