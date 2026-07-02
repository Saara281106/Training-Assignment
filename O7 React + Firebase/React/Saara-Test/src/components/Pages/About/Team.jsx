export default function Team() {
  return (
    <main className="main">
      {/* Page Title */}
      <div className="page-title accent-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Team</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="current">Team</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* End Page Title */}
      {/* Team Section */}
      <section id="team" className="team section">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
             
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src="/assets/img/team/team-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                </div>
              </div>
            </div>
            {/* End Team Member */}
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src="/assets/img/team/team-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                </div>
              </div>
            </div>
            {/* End Team Member */}
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src="/assets/img/team/team-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                </div>
              </div>
            </div>
            {/* End Team Member */}
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
             
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src="/assets/img/team/team-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                </div>
              </div>
            </div>
            {/* End Team Member */}
          </div>
        </div>
      </section>
      {/* /Team Section */}
    </main>
  );
}
