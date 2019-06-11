import React from "react";
import "../App.css";
import "../styles/bootstrap.min.css";

class NgoDashboard extends React.Component {
  state = {};
  render() {
    return (
      <div class="form-container-dashboard">
        <h1 align="center">Welcome</h1>
        <div class="dropdown" align="right">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="glyphicon glyphicon-user" />
            User
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              Details
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>

        <div class="card">
          <div class="card-header">Collections</div>
          <div class="card-body">
            <p class="card-text">will-show-number-of-donations-received</p>
            <a href="#" class="btn btn-success">
              View details
            </a>
            <p class="card-text">will-show-number-of-collections-pending</p>
            <a href="#" class="btn btn-warning">
              View details
            </a>
          </div>
        </div>

        <a href="#" class="btn btn-primary">
          View Donations
        </a>
      </div>
    );
  }
}

export default NgoDashboard;
