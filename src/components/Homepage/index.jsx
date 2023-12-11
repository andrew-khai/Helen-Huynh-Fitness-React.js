import { useState } from "react";
import "./Homepage.css"
import { FaStar } from "react-icons/fa";

const HomePage = () => {
  const [dropdown1, setDropdown1] = useState(true);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

  const toggleDropDown1 = () => {
    setDropdown1(!dropdown1)
  }
  const toggleDropDown2 = () => {
    setDropdown2(!dropdown2)
  }
  const toggleDropDown3 = () => {
    setDropdown3(!dropdown3)
  }

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
            <a className="reviews-link" target="_blank" href="https://www.yelp.com/biz/foothill-physique-studio-monrovia?q=helen">More Yelp reviews</a>
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
      <section id="sessions-section-container">
        <div className="sessions-container">
          <div className="sessions-info-container">
            <div className="sessions-section-title">Available Coaching Sessions</div>
            <div className="sessions-lines"></div>
            <div className="sessions-info">
              <div className="training-and-rates">
                <div className="training-type">ONE-ON-ONE IN-PERSON TRAINING</div>
                <div className="pricing">
                  <div>$80/hr</div>
                  <div onClick={toggleDropDown1} className="session-dropdown"><i className={`fa-solid fa-chevron-${dropdown1 ? 'down' : 'up'}`}></i></div>
                </div>
              </div>
              {dropdown1 && (
                <div className={`training-description ${dropdown1 ? 'active' : ''}`}>
                  Go over goals, and current fitness level, create a custom workout plan, provide exercise instruction, hands-on form and technique corrections,
                  motivation and support, progress tracking, safety and injury prevention, workout variety, education, and provide feedback.
                  Sessions are 60 minutes, structure varies among individuals.
                </div>
              )}
            </div>
            <div className="sessions-lines"></div>
            <div className="sessions-info">
              <div className="training-and-rates">
                <div className="training-type">GROUP IN-PERSON TRAINIING</div>
                <div className="pricing">
                  <div>$120/hr</div>
                  <div onClick={toggleDropDown2} className="session-dropdown"><i className={`fa-solid fa-chevron-${dropdown2 ? 'down' : 'up'}`}></i></div>
                </div>
              </div>
              {dropdown2 && (
                <div className={`training-description ${dropdown2 ? 'active' : ''}`}>
                  Go over goals, and current fitness level(s), create a custom workout plan(s), provide exercise instruction, hands-on form and technique corrections,
                  motivation and support, progress tracking, safety and injury prevention, workout variety, education, and provide feedback.
                  Sessions are 60 minutes, structure varies among individuals.
                </div>
              )}
            </div>
            <div className="sessions-lines"></div>
            <div className="sessions-info">
              <div className="training-and-rates">
                <div className="training-type">NUTRITION COACHING</div>
                <div className="pricing">
                  <div>Rates vary</div>
                  <div onClick={toggleDropDown3} className="session-dropdown"><i className={`fa-solid fa-chevron-${dropdown3 ? 'down' : 'up'}`}></i></div>
                </div>
              </div>
              {dropdown3 && (
                <div className={`training-description ${dropdown3 ? 'active' : ''}`}>
                  Assess, educate, plan, and monitor eating habits. Offer support, feedback, individualized advice, strategies and solutions on
                  how to improve diet to achieve personal goals and an overall healthy lifestyle.
                  Structure varies among individuals.
                </div>
              )}
            </div>
            <div className="sessions-lines"></div>
            <a href="/" id="session-button">
              Schedule a session
            </a>
          </div>
          <div className="sessions-image">

          </div>
        </div>
        <div className="training-image">
          <img style={{ width: '100%', height: '100%' }} src="/images/helen3.jpeg" />
        </div>
      </section>
      <section id="contact-section-container">
        <h1>Placeholder</h1>
      </section>
    </main>
  )
}

export default HomePage;
