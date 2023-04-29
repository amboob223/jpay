//component for the main shit
import React from 'react';
import "./App.css"
// import Axios from "axios";
import User from "./components/user";
import Traveler from "./components/traveler";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';

function App() {
  //this is the js part






  // const [usernameReg, setUsernameReg] = useState("")
  // const [passwordReg, setPasswordReg] = useState("")

  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")

  // const [loginstatus, setLoginStatus] = useState("")

  // Axios.defaults.withCredentials = true //got to put this

  // const register = () => {
  //   Axios.post("http://localhost:3001/register",
  //     {
  //       username: usernameReg,
  //       password: passwordReg

  //     }).then((response) => {
  //       console.log(response)
  //     })
  // }

  // const login = () => {
  //   Axios.post("http://localhost:3001/login", {
  //     username: username,
  //     password: password
  //   }).then((response) => {
  //     if (response.data.message) {
  //       setLoginStatus(response.data.message)
  //     } else {
  //       setLoginStatus(response.data[0].username)
  //     }
  //   })
  // }

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/login").then((response) => {
  //     if (response.data.isLoggedIn === true) {
  //       setLoginStatus(response.data.user[0].username);
  //     }
  //   })
  // }, [])

  return (<div>

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/traveler" element={<Traveler />} />
      </Routes>
    </Router>

  </div >)
}
function Home() {
  return (<div>
    <h1>welcome to the jpay site </h1>
  </div>)
}

export default App;
