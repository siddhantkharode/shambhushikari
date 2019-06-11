import React from "react";
import "../App.css";
import "../styles/bootstrap.min.css";
import SideNav from "./SideNav";

class Books extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <SideNav />
        </div>
        <div class="form-container">
          <h2 align="center">BOOKS</h2>
          <div class="form-group">
            <span> Quantity :</span>
            <input class="textBox1" type="text" placeholder="Quantity" />
          </div>
          <div class="form-group">
            <div class="container3 text-center">
              <input type="button" value="Donate" class="btn btn-primary" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Books;
