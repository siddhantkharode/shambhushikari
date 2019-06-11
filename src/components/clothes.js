import React from "react";
import "../App.css";
import "../styles/bootstrap.min.css";
import SideNav from "./SideNav";

class Clothes extends React.Component {
  render() {
    return (
      <div className="App">
        <div class="form-container">
          <h2 align="center">CLOTHES</h2>
          <div class="form-group">
            <span> Quantity :</span>
            <input class="textBox1" type="text" placeholder="Quantity" />
          </div>
          <div>
            <input type="checkbox" id="Shirt" />
            Shirt
          </div>
          <div>
            <input type="checkbox" id="Pants" />
            Pants
          </div>
          <div>
            <input type="checkbox" id="Shoes" />
            Shoes
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

export default Clothes;
