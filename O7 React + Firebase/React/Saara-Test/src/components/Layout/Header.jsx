import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container position-relative d-flex align-items-center">
        <Link
          to="index.html"
          className="logo d-flex align-items-center me-auto"
        >
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="assets/img/logo.png" alt=""> */}
          <h1 className="sitename">Company</h1>
          <span>.</span>
        </Link>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li className="dropdown">
              <Link to="/about">
                <span>About</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown" />
              </Link>
              <ul>
                <li>
                  <Link to="/team">Team</Link>
                </li>
                <li>
                  <Link to="/testimonial">Testimonials</Link>
                </li>
                <li className="dropdown">
                  <Link to="#">
                    <span>Deep Dropdown</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown" />
                  </Link>
                  <ul>
                    <li>
                      <Link to="#">Deep Dropdown 1</Link>
                    </li>
                    <li>
                      <Link to="#">Deep Dropdown 2</Link>
                    </li>
                    <li>
                      <Link to="#">Deep Dropdown 3</Link>
                    </li>
                    <li>
                      <Link to="#">Deep Dropdown 4</Link>
                    </li>
                    <li>
                      <Link to="#">Deep Dropdown 5</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>
        <div className="header-social-links">
          <Link to="#" className="twitter">
            <i className="bi bi-twitter-x" />
          </Link>
          <Link to="#" className="facebook">
            <i className="bi bi-facebook" />
          </Link>
          <Link to="#" className="instagram">
            <i className="bi bi-instagram" />
          </Link>
          <Link to="#" className="linkedin">
            <i className="bi bi-linkedin" />
          </Link>
        </div>
      </div>
    </header>
  );
}
