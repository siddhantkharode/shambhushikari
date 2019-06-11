import React from "react";
import "../App.css";
import "../styles/bootstrap.min.css";
import { Link } from "react-router-dom";

class NgoSignUp extends React.Component {
  render() {
    return (
      <div className="App">
        <form class="form-container">
          <h1 align="center">Register</h1>
          <div class="form-group">
            <p>Name of NGO</p>
            <input class="textBox" type="text" placeholder="Name of NGO" />
          </div>
          <div class="form-group">
            <p>City of Operation</p>
            <input
              class="textBox"
              type="text"
              placeholder="City of Operation"
            />
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
            <Link to="/ndash">
              <input
                class="btn btn-primary"
                type="button"
                onClick="location.href:'#';"
                value="Register"
              />
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default NgoSignUp;
