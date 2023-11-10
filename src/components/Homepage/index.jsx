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
              <p className="helenhuynh">Helen Huynh</p>
              <div className="degree-container">
                <p className="degree">B.S. in Health Science</p>
                <p className="degree">M.S. in Food Science</p>
              </div>
            </div>
            <div className="experience">
              <p><strong>5+ YEARS</strong> <span style={{fontFamily: "SF Pro Display Regular"}}>OF FITNESS AND NUTRITION COACHING</span></p>
            </div>
          </div>
          <div className="second-about-me">
            <p style={{margin: "0px"}}>
            She specializes in <i>nutrition coaching, muscle building, fat loss, athletic performance, and overall health and longevity. </i>
            Her passion is to build a lifelong relationship with my clients and become poignant in my clients' lives through guidance, motivation, and experience.
            </p>
          </div>
          <div>
            <button className="about-button">
              About
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage;
