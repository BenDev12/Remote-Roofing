import React from "react";
import "./App.css";
import LogIn from ".././Components/Auths/LogIn";

function Home() {
  return (
    <div className="homeContainer">
      <div className="login">
        <h1>Login</h1>
        <label>Email</label>
        <input type="text" className="input-control" />
        <label>Password</label>
        <input type="text" className="input-control" />
        <div className="LoginFooter">
          <div className="remeber">
            {" "}
            <input type="checkBox" />
            <p>Remember me</p>
          </div>

          <button className="sendButton">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
