import React from "react";
import "../App.css";
import "../styles/bootstrap.min.css";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "ritwik",
      password: "sharma"
    };
  }
  render() {
    return (
      <div className="App">
        <form class="form-container">
          <h1 align="center">Login</h1>
          <div class="form-group">
            <p>E-mail :</p>
            <input class="textBox" type="text" placeholder="E-mail" />
          </div>
          <div class="form-group">
            <p>Password :</p>
            <input class="textBox" type="password" placeholder="Password" />
          </div>
          <div class="form-group">
            <div class="container text-center">
              <input
                type="button"
                onclick="location.href='#';"
                class="btn btn-primary"
                value="Login"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="container2 text-center">
              <Link to="/signup">
                <button type="button" class="btn btn-primary">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
          <div class="form-group">
            <div class="container3 text-center">
              <Link to="/ngosu">
                <input
                  type="button"
                  value="Register NGO"
                  class="btn btn-primary"
                />
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
