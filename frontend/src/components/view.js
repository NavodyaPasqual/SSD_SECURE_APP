import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RestService from "../API/RestApi";
import img from '../img/ex14.jpg'
import img2 from '../img/user_90302.jpg'

import "./style.css"
//Imported just a needed librariesand pictures.
//This page working as a secure logged in Scession for the users



function View() {

    let data = JSON.parse(localStorage.getItem('dataKey'));
    const [hiddenField, setHiddenField] = useState(false);
    const [newPassword, setNewPassword] = useState(""); 
    const [password, setPassword] = useState(""); 

    const [hiddenStatus, setHiddenStatus] = useState(false);
    const [errorValue, SetErrorValue] = useState("");


    const resetFunction = () => {
      setHiddenField(true);
    } 


    //Add staff function for the Admin Initially (call up this) :-
    const addStaffFunction = () => {
      window.open("http://localhost:3000/sign-up","_self");
    }

   
    //Cancel Reset (Call Below) :-
    const resetCancelFunction = () => {
      setPassword("");
      setNewPassword("");
      setHiddenField(false);
    } 


    //Password Update Function :-
    const UpdateFunction = () =>{
      const payload = {
        password:password,
        newPassword:newPassword,
        username:data.username
      }

      RestService.resetPassword(payload).then((response)=>{
        if(response.status === 201){
          
          setPassword("");
          setNewPassword("");
          SetErrorValue(response.data.error);
          setHiddenStatus(true);
        }

        if(response.status === 200){
          setHiddenStatus(false);
          resetCancelFunction();
          alert("Password Resetted Successfully !");
        }
      });
    }





//Admin Detected :-

    if(data.role === 'admin'){
      return (
        <>
        <center>
          <img src={img2} style={{height:"100px", width:"100px","margin-top":"-15px"}} />
        </center>


        <article className="card">

          <div className="card_content">
            <h5 className="card_title">
                Welcome Mr./Ms.{data.name}
            </h5>
            <span className="card_subtitle">Your Number: +{data.number}</span>
            <p className="card_description">
              Username used to log in :- "{data.username}".
              <br/>
              Assigned as :- "{data.role}".
              <br/>
              Thank you for being with RNTB messageing System.
              <br/>
              (As a admin  you have the controle of other users)
            </p>
          </div>
        </article>

        <br/>
        <center>

        {hiddenField ? (
          <>
          <h3>Password Reset</h3>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Please Enter Old Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Please Enter New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              />
          </div>

          {hiddenStatus ? (
            <p style={{color:"red"}}>{errorValue}</p>
          ) : ""}
          
          <br/>
          <button onClick={UpdateFunction}  className="btn btn-primary">
              Update Password
          </button> &nbsp; &nbsp; &nbsp;
          <button onClick={resetCancelFunction}  className="btn btn-primary">
              Cancel
          </button>
          </>
        ) : (
          <>
          <button onClick={resetFunction}  className="btn btn-primary">
              Reset Password
          </button>

          </>
        )}

          <br/><br/>
          <button onClick={addStaffFunction}  className="btn btn-primary">
           Add My Staff
          </button>
          
        </center>
        </>
      )
    }




//Manager Detected and Handeling :-

    if(data.role === 'manager'){
      return (
        <>

        <article className="card">
          <div className="card_content">
            
            <img src={img} style={{height:"50px", width:"50px","margin-top":"0px", float:"right"}} />
            <h3 className="card_title">
               Welcome Mr./Ms. {data.name}
            </h3>
            <span className="card_subtitle">Number: +{data.number}</span>
            <p className="card_description">
              Username used to log in to the account is "{data.username}" , Assigned as "{data.role}".
              Thank you for being with RNTB messageing System.
            </p>

          </div>
        </article>

        </>
      )
    }




//Worker Detacted and handeling :-

    if(data.role === 'worker'){
      return (
        <>

        <article className="card">
          <div className="card_content">
          <img src={img} style={{height:"50px", width:"50px","margin-top":"0px", float:"right"}} />
            <h3 className="card_title">
              Welcome Mr./Ms. {data.name}
            </h3>
            <span className="card_subtitle">Number: +{data.number}</span>
            <p className="card_description">
              Username used to log in to the account is "{data.username}" , Assigned as "{data.role}".
              Thank you for being with RNTB messageing System.
            </p>
          </div>
        </article>

        </>
      )
    }


    //File over
  
}
export default View;