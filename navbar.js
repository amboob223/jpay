import { Link } from "react-router-dom";
// import React, { useState, useEffect } from 'react';
import "../App.css"
// import Axios from "axios";


function Navbar() {




    // const [usernameReg, setUsernameReg] = useState("")
    // const [passwordReg, setPasswordReg] = useState("")

    // const [username, setUsername] = useState("")
    // const [password, setPassword] = useState("")

    // const [loginstatus, setLoginStatus] = useState("")

    // Axios.defaults.withCredentials = true //got to put this

    // const register = () => {
    //     Axios.post("http://localhost:3001/register",
    //         {
    //             username: usernameReg,
    //             password: passwordReg

    //         }).then((response) => {
    //             console.log(response)
    //         })
    // }

    // const login = () => {
    //     Axios.post("http://localhost:3001/login", {
    //         username: username,
    //         password: password
    //     }).then((response) => {
    //         if (response.data.message) {
    //             setLoginStatus(response.data.message)
    //         } else {
    //             setLoginStatus(response.data[0].username)
    //         }
    //     })
    // }

    // useEffect(() => {
    //     Axios.get("http://localhost:3001/login").then((response) => {
    //         if (response.data.isLoggedIn === true) {
    //             setLoginStatus(response.data.user[0].username);
    //         }
    //     })
    // }, [])


    return (<div>
        <div className="registration">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/traveler">Traveler</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/user">user</Link>
                </li>
            </ul>
            {/* <button onClick={register}>register</button> */}
            <h1>login</h1>
            {/* {loginstatus} */}
        </div>
    </div>)

}

export default Navbar;