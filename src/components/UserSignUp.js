import React from "react";
import "../App.css";
import "../styles/bootstrap.min.css";
import { Link } from "react-router-dom";

class UserSignUp extends React.Component {
  render() {
    return (
      <div className="App">
        <form class="form-container">
          <h1 align="center">Sign up</h1>
          <div class="form-group">
            <p>E-mail</p>
            <input class="textBox" type="text" placeholder="E-mail" />
          </div>
          <div class="form-group">
            <p>Contact No.</p>
            <input class="textBox" type="text" placeholder="Contact No." />
          </div>
          <div class="form-group">
            <p>Address</p>
            <input class="textBox" type="text" placeholder="Address" />
          </div>
          <div class="form-group">
            <p>City</p>
            <input class="textBox" type="text" placeholder="City" />
          </div>
          <div class="form-group">
            <p>Password</p>
            <input class="textBox" type="password" placeholder="Password" />
          </div>
          <div class="form-group">
            <p>Confirm Password</p>
            <input
              class="textBox"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div class="form-group">
            <Link to="/udash">
              <input
                type="button"
                onClick="location.href='#';"
                value="Sign up"
                class="btn btn-primary btn-lg"
              />
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default UserSignUp;
