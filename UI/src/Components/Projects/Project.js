import React, { Component } from "react";

export class Project extends Component {
  render() {
    return (
      <div className="project-list">
        <div className="search-projects">
          <div className="group-control">
            <input
              type="text"
              placeholder="Search project"
              className="search-control"
            />{" "}
            <span>
              <button className="serach-button">Search</button>
            </span>
          </div>
        </div>
        <div className="project container"></div>
      </div>
    );
  }
}

export default Project;
