import React, { useState } from 'react'
import RestService from "../API/RestApi";
import img from '../img/admin2.jpeg'

function Login(props) {
   
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [hiddenStatus, setHiddenStatus] = useState(false);
    const [errorValue, SetErrorValue] = useState("");


    const submitFunction = () => {

      if(username === ""){
        SetErrorValue("Username is Required");
        setHiddenStatus(true);
      }else if(password === ""){
        SetErrorValue("Password is Required");
        setHiddenStatus(true);
      }
      else{
        const sendPayload = {
          username: username,
          password: password
        }

        RestService.fetchSignUp(sendPayload).then((response)=>{
        //Using Rest to call backend API
           if(response.status === 201){
              SetErrorValue(response.data.error);
              setHiddenStatus(true);
           }
           if(response.status === 200){
            setHiddenStatus(false);
            const data = {
                username:response.data.username,
                name:response.data.name,
                number:response.data.number,
                role:response.data.role,
            }
            const loginStatus = {
              status: false
            }
            localStorage.setItem('dataKey', JSON.stringify(data));
            localStorage.setItem('status', JSON.stringify(loginStatus));
            window.open("http://localhost:3000/home","_self")

            //Passing to the view.js

           }
        })
      }
    };

    return (
      <>
        <img src={img} style={{height:"50px", width:"50px"}} />
        <h3 style={{"margin-top":"-35px"}}>Log In Potral</h3>
        <div className="mb-3">
          <label>Enter Your Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div className="mb-3">
          <label>Enter Your Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div className="d-grid">
          <button onClick={submitFunction}  className="btn btn-primary">
            Authenticate Me
          </button>
          <br/>
          {hiddenStatus ? (
            <p style={{color:"red"}}>{errorValue}</p>
          ) : ""}
        </div>
      </>
    )
  
}

export default Login;