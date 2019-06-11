import React from "react";
import "../App.css";
import "../styles/bootstrap.min.css";

class NgoDonation extends React.Component {
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
                <a href="#">All</a>
              </li>
              <li>
                <a href="#">Clothes</a>
              </li>
              <li>
                <a href="#">Utensils</a>
              </li>
              <li>
                <a href="#">Toys</a>
              </li>
              <li>
                <a href="#">Books</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NgoDonation;
