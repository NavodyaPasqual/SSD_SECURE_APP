import React, { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './User/components/login.component'
import Chat from './Chat/chat'
import SignUp from './User/components/signup.component'
import View from './User/components/view';
import img from './User/img/ex11.png'
import img2 from './User/img/dmin_1.png'
import img3 from './User/img/download.jpeg'

function App() {


  // Logging out the user :- 

  function logOutFunction() {
    localStorage.clear();
    window.open("http://localhost:3000/sign-in", "_self")
  }

  const [navHidden, setNavHidden] = useState(true);

  let data = JSON.parse(localStorage.getItem('status'));

  useEffect(() => {
    if (data !== undefined && data !== null) {
      setNavHidden(data.status)
    }
  }, [])

  const hiddenState = () => {
    setNavHidden(false)
  }

  //Returning :-

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">

            <Link className="navbar-brand" to={'/sign-in'}>
              <img src={img} style={{ height: "50px", width: "50px" }} />
              RNTB Messaging System
            </Link>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                {navHidden ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/sign-in'}>
                        <img src={img3} style={{ height: "30px", width: "30px" }} />
                        Login
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                    <Link className="nav-link" to={'/sign-up'}>
                      Sign up
                    </Link>
                  </li> */}
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/chat">
                        Chat
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" onClick={logOutFunction}>
                        Log out
                        <img src={img2} style={{ height: "30px", width: "30px" }} />
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>

          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login hiddenState={hiddenState} />} />
              <Route path="/sign-in" element={<Login hiddenState={hiddenState} />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/home" element={<View />} />
            </Routes>
          </div>
        </div>
        <div className="footer">
          <center>

            <h5>All Rights Reserved, @Ruvindu Kaushalya_@Navodya Pasqual_@Buddi_Amarasinghe_@Tushan - RNTB</h5>

          </center>
        </div>
      </div>
    </Router>
  )
}
export default App