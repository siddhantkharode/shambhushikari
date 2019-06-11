import React from "react";
import "../App.css";
import "../styles/bootstrap.min.css";

class SideNav extends React.Component {
  render() {
    return (
      <div class="form-container-dashboard">
        <div class="sid">
          <div id="slide-out" class="side-nav fixed">
            <div class="logo-wrapper waves-light">
              <a href="#">
                <img
                  src="https://mdbootstrap.com/img/logo/mdb-transparent.png"
                  class="img-fluid flex-center"
                />
              </a>
            </div>

            <ul class="custom-scrollbar">
              <li>
                <a href="#">clothes</a>
              </li>
              <li>
                <a href="#">utensils</a>
              </li>
              <li>
                <a href="#">toys</a>
              </li>
              <li>
                <a href="#">books</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNav;
