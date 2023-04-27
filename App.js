import React, { useState, useEffect } from 'react';
import "./App.css"
import Axios from "axios";

//component for the main shit

function App() {
  //this is the js part
  const [usernameReg, setUsernameReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [loginstatus, setLoginStatus] = useState("")

  Axios.defaults.withCredentials = true //got to put this

  const register = () => {
    Axios.post("http://localhost:3001/register",
      {
        username: usernameReg,
        password: passwordReg

      }).then((response) => {
        console.log(response)
      })
  }

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message)
      } else {
        setLoginStatus(response.data[0].usename)
      }
    })
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].username);
      }
    })
  }, [])

  return (<div>
    {/* this is the jsx part  */}
    <div className="registration">
      <h1>registation</h1>
      <label>username</label>

      <input
        type="text"
        onChange={(e) => {
          setUsernameReg(e.target.value)
        }}
      />
      <label>password</label>
      <input
        type="text"
        onChange={(e) => {
          setPasswordReg(e.target.value)
        }}
      />
      <button onClick={register}>register</button>
      <h1>login</h1>
      <label>username</label>
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value)
        }}

      />

      <label>Password</label>
      <input
        type="text"
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      <button onChange={login}>click</button>
    </div>



  </div>)
}

