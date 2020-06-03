import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import SignUp from "../../Auths/SignUp";
import Project from "../../Projects/Project";
import addProject from "../../Projects/addProject";
import AddUser from "../../Users/AddUser";
import Users from "../../Users/Users";
import Home from "../../../Container/Home";
import Single from "../../Projects/Single";

function Navigation() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <div className="navbar-Name">Roofing Remote project</div>

          <nav className="nav-bar">
            {" "}
            <ul className="navbar-item">
              <Link to={"/"} className="Nav-link">
                {" "}
                <li className="list-item">Home</li>
              </Link>

              <Link to={"/Project"} className="Nav-link">
                {" "}
                <li className="list-item">Projects</li>{" "}
              </Link>
              <Link to={"/Users"} className="Nav-link">
                <li className="list-item">Users</li>{" "}
              </Link>
            </ul>
            <ul className="navbar-item">
              <Link to={"/addProject"} className="Nav-link">
                {" "}
                <li className="list-item">Add a project</li>{" "}
              </Link>
              <Link to={"/addUser"} className="Nav-link">
                <li className="list-item">Add User</li>{" "}
              </Link>
              <Link to="/Single">
                <li className="list-item">Single</li>
              </Link>
            </ul>
          </nav>
        </div>
        <Route path="/" exact component={Home} />
        <Route path="/Users" component={Users} />
        <Route path="/Project" component={Project} />
        <Route path="/addProject" component={addProject} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/AddUser" component={AddUser} />
        <Route path="/Single" component={Single} />
      </div>
    </BrowserRouter>
  );
}

export default Navigation;
