import defaultHeaderImage from '../../assets/images/cover.jpg'

export default function PageHeader({
  eyebrow,
  title,
  italic,
  copy,
  imageSrc = defaultHeaderImage,
  imageAlt = '',
  imagePosition = 'center 48%',
  children,
}) {
  return (
    <section className={`page-hero${imageSrc ? ' page-hero-image' : ''}`}>
      {imageSrc && <img src={imageSrc} alt={imageAlt} style={{ objectPosition: imagePosition }} />}
      <div className="page-hero-shade" />
      <div className="content-wrap page-hero-content">
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}{italic && <><br /><em>{italic}</em></>}</h1>
        {copy && <p className="page-hero-copy">{copy}</p>}
        {children}
      </div>
      <span className="page-hero-number" aria-hidden="true">A · C</span>
    </section>
  )
}
