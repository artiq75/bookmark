function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h2 className="banner-title">A Simple Bookmark Manager</h2>
        <p className="banner-text">
          A clean and simple interface to organize your favorite website. Open a
          new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="banner-btns">
          <button className="btn primary">Get it on Chrome</button>
          <button className="btn secondary">Get if on Firefox</button>
        </div>
      </div>
      <div className="banner-img">
        <img src="/assets/illustration-hero.svg" alt="Hero illustration" />
      </div>
    </section>
  )
}

export default Banner
