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
    <main className="main">
      {/* Page Title */}
      <div className="page-title accent-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Login</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="current">Login</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* End Page Title */}
      {/* Contact Section */}
      <section id="contact" className="contact section">
        
        <div className="container" >
          <br />
          <div className="row gy-5 gx-lg-5">
            
            <div className="col-lg-8 offset-2">
              <form
                onSubmit={handleSubmit}
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required=""
                      onChange={getName}
                    />
                  </div>
                  <div className="col-md-12 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required=""
                      onChange={getEmail}
                    />
                  </div>
                  <div className="col-md-12 form-group mt-3 mt-md-0">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="name"
                      placeholder="Enter Password"
                      required=""
                      onChange={getPassword}
                    />
                  </div>
                </div>
                
                
                
                <div className="text-center">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
            {/* End Contact Form */}
          </div>
        </div>
      </section>
      {/* /Contact Section */}
    </main>
  );
}