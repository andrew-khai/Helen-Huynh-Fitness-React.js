import "./Footer.css"
import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer id="main-footer-container">
        <div id="footer-container">
          <div id="location-hours-container">
            <div className="location-container">
              <div className="location-title">Helen Huynh Personal Training</div>
              <div className="location-name">FITNESS FACTOR</div>
              <p>401 Rolyn Pl</p>
              <p>Arcadia, CA 91007</p>
              {/* <p>helen.huynhh@gmail.com</p> */}
            </div>
            <div className="hours-container">
              <div className="date-time-container">
                <div className="date">Mon</div>
                <div className="time">5:00am - 10:00pm</div>
              </div>
              <div className="date-time-container">
                <div className="date">Tue</div>
                <div className="time">5:00am - 10:00pm</div>
              </div>
              <div className="date-time-container">
                <div className="date">Wed</div>
                <div className="time">5:00am - 10:00pm</div>
              </div>
              <div className="date-time-container">
                <div className="date">Thu</div>
                <div className="time">5:00am - 10:00pm</div>
              </div>
              <div className="date-time-container">
                <div className="date">Fri</div>
                <div className="time">5:00am - 10:00pm</div>
              </div>
              <div className="date-time-container">
                <div className="date">Sat </div>
                <div className="time">6:00am - 8:00pm</div>
              </div>
              <div className="date-time-container">
                <div className="date">Sun </div>
                <div className="time">7:00am - 8:00pm</div>
              </div>
            </div>
          </div>
          <div id="bottom-nav-links">
            <div id="company-copyright">© 2023 Helen Huynh Fitness</div>
            <ul id="bottom-navbar-container">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about-me-container">About</a>
              </li>
              <li>
                <a href="#reviews-section-container">Review</a>
              </li>
              <li>
                <a href="#sessions-section-container">Services</a>
              </li>
              <li>
                <a href="#contact-section-container">Contact</a>
              </li>
            </ul>
            <ul id="social-links-container">
              <li>
                <a href="https://www.linkedin.com/in/helenhuynhh" target="_blank"><FaLinkedin size={32} style={{ marginRight: '10px' }} /></a>
              </li>
              <li>
                <a href="https://www.facebook.com/helenhuynhhh" target="_blank"><FaFacebook size={32} style={{ marginRight: '10px' }} /></a>
              </li>
              <li>
                <a href="https://www.instagram.com/helenhuynhh/" target="_blank"><FaInstagram size={32} /></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
