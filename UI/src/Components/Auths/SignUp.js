import React, { Component } from "react";

export class SignUp extends Component {
  render() {
    return (
      <div>
        <h1>SignUp</h1>
        <form>
          <label>Email</label>
          <input />
          <label>Password</label>
          <input />
          <div>
            <p>
              Already have an Account?<a href={"/"}>LogIn</a>
            </p>
            <button>SignUp</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
