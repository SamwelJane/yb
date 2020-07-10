import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return <>
    <div >
      {/* Container containing all contents */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            {/* White Container */}
            <div className="container bg-white rounded mt-2 mb-2 px-0">
              {/* Main Heading */}
              <div className="row justify-content-center align-items-center pt-3">
                <h1><strong>Login</strong></h1>
              </div>
              {/* Alternative Login */}
              <div className="mx-0 px-0 bg-light">
                <div className="pt-4">
                 
                  <div className="row justify-content-center">
                    <h5>With your social media account</h5>
                  </div> {/* Social Media Login buttons */}
                  <div className="row justify-content-center pt-4">
                    <div className="col-10">
                      <div className="row justify-content-center">
                        {/* Twitter Connect */}
                        <div className="col-7 col-sm-4 px-1 pb-1"> <a href="#" className="btn btn-block btn-social btn-twitter"> <span className="fa fa-twitter" /> Twitter </a> </div> {/* Facebook Connect */}
                        <div className="col-7 col-sm-4 px-1 pb-1"> <a href="#" className="btn btn-block btn-social btn-facebook"> <span className="fa fa-facebook" /> Facebook </a> </div> {/* Google Connect */}
                        <div className="col-7 col-sm-4 px-1 pb-1"> <a href="#" className="btn btn-block btn-social btn-google"> <span className="fa fa-google-plus" /> Google+ </a> </div>
                      </div>
                    </div>
                  </div>
                </div> {/* Horizontal Line */}
                <div className="px-4 pt-5">
                  <hr />
                </div> {/* Register Now */}
                <div className="pt-2">
                  <div className="row justify-content-center">
                    <h5>Don't have an Account?<span><Link to="/Register" className="text-danger"> Register Now!</Link></span></h5>
                  </div>
                  <div className="row justify-content-center align-items-center pt-4 pb-5">
                    <div className="col-4"> <Link to="/Register" className="btn btn-block btn-info"> REGISTER </Link> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>{/* /.container */}
    {/* FOOTER */}
  </>
}

export default Home;
