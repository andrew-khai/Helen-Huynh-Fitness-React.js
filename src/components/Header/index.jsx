import "./Header.css"

const Header = () => {
  return (
    <header id="main-header">
      <nav id="main-nav">
        <div id="site-title">
          <h1 id="header-title">Helen Huynh Fitness</h1>
          <h2 id="subheader">PERSONAL TRAINER AND NUTRITION COACH</h2>
        </div>
        <div id="site-nav-links">
          <a className="navbar-links" href="/">About</a>
          <a className="navbar-links" href="/">Services</a>
          <a className="navbar-links" href="/">Contact</a>
        </div>
      </nav>
      <button id="schedule-button" className="beige">
        Schedule a session
      </button>
    </header>
  )
}

export default Header;
