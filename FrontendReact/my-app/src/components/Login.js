import React from 'react'
import '../index.css';
export default function Login(){
    return(
     <>
     <section classname="vh-100">
  <div classname="container-fluid h-custom">
    <div classname="row d-flex justify-content-center align-items-center h-100">
      <div classname="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          classname="img-fluid" alt="Sample image"/>
      </div>
      <div classname="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div classname="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p classname="lead fw-normal mb-0 me-3">Sign in with</p>
            <button type="button" classname="btn btn-primary btn-floating mx-1">
              <i classname="fab fa-facebook-f"></i>
            </button>

            <button type="button" classname="btn btn-primary btn-floating mx-1">
              <i classname="fab fa-twitter"></i>
            </button>

            <button type="button" classname="btn btn-primary btn-floating mx-1">
              <i classname="fab fa-linkedin-in"></i>
            </button>
          </div>

          <div classname="divider d-flex align-items-center my-4">
            <p classname="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          
          <div classname="form-outline mb-4">
            <input type="email" id="form3Example3" classname="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label classname="form-label" for="form3Example3">Email address</label>
          </div>

          
          <div classname="form-outline mb-3">
            <input type="password" id="form3Example4" classname="form-control form-control-lg"
              placeholder="Enter password" />
            <label classname="form-label" for="form3Example4">Password</label>
          </div>

          <div classname="d-flex justify-content-between align-items-center">
          
            <div classname="form-check mb-0">
              <input classname="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label classname="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" classname="text-body">Forgot password?</a>
          </div>

          <div classname="text-center text-lg-start mt-4 pt-2">
            <button type="button" classname="btn btn-primary btn-lg"
              >Login</button>
            <p classname="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                classname="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div
    classname="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    
    <div classname="text-white mb-3 mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>
    
    <div>
      <a href="#!" classname="text-white me-4">
        <i classname="fab fa-facebook-f"></i>
      </a>
      <a href="#!" classname="text-white me-4">
        <i classname="fab fa-twitter"></i>
      </a>
      <a href="#!" classname="text-white me-4">
        <i classname="fab fa-google"></i>
      </a>
      <a href="#!" classname="text-white">
        <i classname="fab fa-linkedin-in"></i>
      </a>
    </div>

  </div>
</section>
     </>
    )
}
