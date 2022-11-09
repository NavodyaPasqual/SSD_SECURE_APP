import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles/navBar.css";
import Logout from "./Logout";
const Navbar = () => {

  let data = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY));

  const navigate = useNavigate();

  const isActive = (navigate, path) => {
    if (navigate === path) {
      return { color: "#000000" }
    } else {
      return { color: "#989494" }
    }
  };

  return (
    <div data-testid="nav-1 row">
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <div className="navbar-brand">
              <a>RNTB Messaging System</a>
          </div>
          <button className="navbar-toggler ml-auto custom-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="nav collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <div className="navbar-nav mr-auto">
                {data && data.role === 'admin' &&
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" style={isActive(navigate, '/profile')} to="/profile">Profile</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" style={isActive(navigate, '/register')} to="/register">Add Members</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" style={isActive(navigate, '/')} to="/">Chat</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" style={isActive(navigate, '/file')} to="/file">File Upload</Link>
                    </li>
                  </>
                }
                {data && data.role === 'manager' &&
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" style={isActive(navigate, '/profile')} to="/profile">Profile</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" style={isActive(navigate, '/')} to="/">Chat</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" style={isActive(navigate, '/file')} to="/file">File Upload</Link>
                    </li>
                  </>
                }
                {data && data.role === 'worker' &&
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" style={isActive(navigate, '/profile')} to="/profile">Profile</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" style={isActive(navigate, '/')} to="/">Chat</Link>
                    </li>
                  </>
                }
              </div>
            </ul>
          </div>
          {data &&
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <center>
                  <Link className="nav-link mt-1">
                    <Logout />
                  </Link>
                </center>
              </li>
            </div>
          }
          {!data &&
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <center>
                  <Link className="nav-link mt-0" style={isActive(navigate, '/login')} to="/login">
                    <b>Login</b>
                  </Link>
                </center>
              </li>
            </div>
          }
        </div>
      </nav >
    </div >
  )
}

export default Navbar;