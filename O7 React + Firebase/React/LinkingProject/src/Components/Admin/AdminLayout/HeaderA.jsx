import { Link } from "react-router-dom";
import './HeaderA.css'

export default function HeaderA() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand fs-4 main" href="#">
            Admin Panel
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/admin">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="user">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="enquiries">
                  Enquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
