import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {

  const[name , setName] = useState("");
  const[email , setEmail] = useState("");
  const[password , setPassword] = useState("");

  const nav = useNavigate();

  function getName(e){
    setEmail(e.target.value);
  }

  function getEmail(e){
    setEmail(e.target.value);
  }

  function getPassword(e){
    setEmail(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    toast.success("Login Successful!")
    nav("/");
    
  }
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Login
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a className="text-white" href="#">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a className="text-white" href="#">
                      Pages
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
      {/* Contact Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Login
            </h6>
          </div>
          <div className="row g-4">
            
            <div
              className="col-lg-4 col-md-12 wow fadeInUp offset-4"
              data-wow-delay="0.5s"
            >
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        onChange = {getName}
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>

                  
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        onChange = {getEmail}
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>

                  </div>
                  
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange = {getPassword}
                        
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  
                  
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  );
}