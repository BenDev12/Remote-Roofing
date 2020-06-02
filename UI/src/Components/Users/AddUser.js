import React, { Component } from "react";
import "./User.css";
export class AddUser extends Component {
  state = {
    User: {
      email: "",
      Surname: "",
      LastName: "",
    },
  };
  onChangeEmailHandler = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  onChangeSurnameHandler = (e) => {
    this.setState({
      surname: e.target.value,
    });
  };

  onChangeNameHandler = (e) => [
    this.setState({
      name: e.target.value,
    }),
  ];

  onSubmitHandler = (e) => {
    e.preventDefault();

    //add the http request URL
  };
  render() {
    return (
      <div className="add-user">
        <h3>Add New User</h3>

        <form className="form-group" onChange={this.onSubmitHandler}>
          <label>Email</label>
          <input
            type="text"
            className="input-control"
            required={true}
            onChange={this.onChangeEmailHandler}
            value={this.state.email}
          />
          <labe>Surname</labe>
          <input
            type="text"
            className="input-control"
            required={true}
            onChange={this.onChangeSurnameHandler}
            value={this.state.surname}
          />
          <label>Last Name</label>
          <input
            type="text"
            className="input-control"
            required={true}
            onChange={this.onChangeNameHandler}
            value={this.state.name}
          />
          <div>
            <button>Add User</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddUser;
