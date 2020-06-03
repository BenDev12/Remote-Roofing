import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Modal from "../Layout/Modal/Modal";
import AddTask from "../Tasks/AddTaskModal";

class Single extends Component {
  state = {
    isOpen: false,
  };

  onChnageHandler = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    return (
      <Aux>
        <Modal show={this.state.isOpen}>
          <AddTask />
        </Modal>
        <div className="single-project">
          <div className="project-Name">
            <h3>
              Project Title: Website development for Oringo and co- adivocates
            </h3>
          </div>
          <div className="project-body">
            Hello, welcome to the home of software designers
          </div>
          <div className="task-container">
            <div className="task-section"></div>
            <div className="add-button">
              <button className="sb-btn" onClick={this.onChnageHandler}>
                Add task
              </button>
            </div>
          </div>
          <div className="project-status">
            <div className="Status-q">
              <h3>What is the project Status</h3>
            </div>
            <div className="status">
              Active <input type="radio" />
            </div>
            <div>
              Inactive <input type="radio" />
            </div>
            <div>
              Declined <input type="radio" />
            </div>
            <div>
              Completed <input type="radio" />
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default Single;
