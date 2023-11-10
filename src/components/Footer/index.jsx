import "./Footer.css"
import { FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer id="main-footer-container">
        <div id="location-hours-container">
          <div className="location-container">
            <div className="location-title">Helen Huynh Personal Training</div>
            <div className="location-name">FOOTHILL PHYSIQUE STUDIOS</div>
            <p>1323 S Shamrock Ave</p>
            <p>Monrovia, CA 91016</p>
            <p>helen.huynhh@gmail.com</p>
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
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Review</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
          <ul id="social-links-container">
            <li>
              <a href="/"><FaYoutube size={32} style={{ marginRight: '10px' }} /></a>
            </li>
            <li>
              <a href="/"><FaFacebook size={32} style={{ marginRight: '10px' }} /></a>
            </li>
            <li>
              <a href="/"><FaInstagram size={32} /></a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer;
