import "./Homepage.css"
import { FaStar } from "react-icons/fa";

const HomePage = () => {
  return (
    <main id="main-content-container">
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
              <p><strong>5+ YEARS</strong> <span style={{ fontFamily: "SF Pro Display Regular" }}>OF FITNESS AND NUTRITION COACHING</span></p>
            </div>
          </div>
          <div className="second-about-me">
            <p style={{ margin: "0px" }}>
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
      <section id="reviews-section-container">
        <div id="reviews-container">
          <div id="main-review-container">
            <div className="main-review">
              <div className="main-reviewer">
                <div className="reviewers">Yuhao S.</div>
                <div className="review-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
              </div>
              <div className="main-review-text">
                Helen takes the time to understand individual needs and tailors every aspect of the program accordingly. Her knowledge is not only impressive but also deeply practical, making the journey towards a healthier lifestyle both educational and enjoyable.
              </div>
            </div>
            <a className="reviews-link" href="/">More Yelp reviews</a>
          </div>
          <div id="other-reviews-container">
            <div className="other-review">
              <div className="other-reviewer">
                <div className="reviewers">Yinfei Z.</div>
                <div className="review-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
              </div>
              <div className="other-review-text">
                I've been training with Helen for years. She has always been patient, designed the training plan to suit my needs, and provided valuable information regarding my diet.
              </div>
            </div>
            <div className="other-review">
              <div className="other-reviewer">
                <div className="reviewers">Jon L.</div>
                <div className="review-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
              </div>
              <div className="other-review-text">
                Knowledgeable, attentive, and will leave you feeling healthier coming out of the gym!
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage;
