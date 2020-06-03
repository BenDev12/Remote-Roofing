import React, { Component } from "react";
import "./Project.css";

export class Project extends Component {
  state = {
    project: {
      name: "",
      body: "",
      status: {
        active: false,
        inactive: false,
        declined: false,
        completed: false,
      },
    },
  };

  onChangeNameHandler = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onChangeBodyHandler = (e) => {
    this.setState({
      body: e.target.value,
    });
  };

  onChangeStatusHandler = (e) => {
    this.setState({
      status: e.target.value,
    });
  };
  onSubmitHandler = (e) => {
    e.preventDefault();

    //adding the http request url
  };

  render() {
    return (
      <div className="add-project">
        <h2>Add a Project</h2>
        <form className="form-group" onChange={this.onSubmitHandler}>
          <label>Project Name</label>
          <input
            type="text"
            className="input-control"
            required={true}
            onChange={this.onChangeNameHandler}
            value={this.state.name}
          />
          <label>Project body</label>
          <input
            type="text"
            className="input-control"
            onChange={this.onChangeBodyHandler}
            vlaue={this.state.project.body}
            required={true}
          />
          <label>Status</label>
          <input
            type="option"
            className="input-control"
            onChange={this.onChangeStatusHandler}
          />
          <div className="submitSection">
            <button type="submit" className="sendButton">
              Add Project
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Project;
