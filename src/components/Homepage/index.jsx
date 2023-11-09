import "./Homepage.css"

const HomePage = () => {
  return (
    <main id="main-container">
      <section id="about-me-container">
        <div id="about-me-image-container">
          <img style={{ width: "323px", height: "385px" }} src="/images/helenheadshot.jpg" />
        </div>
        <div id="about-me-details-container">
          <div className="first-about-me">
            <div className="about-me-credentials">
              <p style={{fontSize: "64px"}}>Helen Huynh</p>
              <div>
                <p>B.S. in Health Science</p>
                <p>M.S. in Food Science</p>
              </div>
            </div>
            <div>
              <p><strong>5+ YEARS</strong> OF FITNESS AND NUTRITION COACHING</p>
            </div>
          </div>
          <div className="second-about-me">
            <p>
            She specializes in nutrition coaching, muscle building, fat loss, athletic performance, and overall health and longevity.
            Her passion is to build a lifelong relationship with my clients and become poignant in my clients' lives through guidance, motivation, and experience.
            </p>
          </div>
          <div>
            <button>
              About
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage;
