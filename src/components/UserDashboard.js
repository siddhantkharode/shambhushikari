import React from "react";
import "../App.css";
import "../styles/bootstrap.min.css";

class UserDashboard extends React.Component {
  state = {};
  render() {
    return (
      <div class="form-container-dashboard">
        <h1 align="center">Welcome User</h1>
        <div class="dropdown" align="right">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
          >
            <span class="glyphicon glyphicon-user" />
            User
            <span class="caret" />
          </button>
          <ul class="dropdown-menu">
            <li>
              <a href="#">Account details</a>
            </li>
            <li>
              <a href="#">Details</a>
            </li>
          </ul>
        </div>
        <div class="card">
          <div class="card-header">Donations</div>
          <div class="card-body">
            <p class="card-text">will-show-number-of-donations-done</p>
            <a href="#" class="btn btn-success">
              View details
            </a>
            <p class="card-text">will-show-number-of-donations-pending</p>
            <a href="#" class="btn btn-warning">
              View details
            </a>
          </div>
        </div>

        <a href="#" class="btn btn-primary btn">
          Donate
        </a>
      </div>
    );
  }
}

export default UserDashboard;
