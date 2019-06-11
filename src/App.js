import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import UserSignUp from "./components/UserSignUp";
import Login from "./components/login";
import NgoSignUp from "./components/NgoSignUp";
import UserDashboard from "./components/UserDashboard";
import NgoDashboard from "./components/NgoDashboard";
import SideNav from "./components/SideNav";
import NgoDonation from "./components/NgoDonation";
import Clothes from "./components/clothes";
import Toys from "./components/toys";
import Utensils from "./components/Utensils";
import Books from "./components/Books";
import UserDonation from "./components/UserDonation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={UserSignUp} />
        <Route path="/ngosu" component={NgoSignUp} />
        <Route path="/udash" component={UserDashboard} />
        <Route path="/ndash" component={NgoDashboard} />
        <Route path="/snav" component={SideNav} />
        <Route path="/ndon" component={NgoDonation} />
        <Route path="/clothes" component={Clothes} />
        <Route path="/toys" component={Toys} />
        <Route path="/utensils" component={Utensils} />
        <Route path="/books" component={Books} />
        <Route path="/udon" component={UserDonation} />
      </BrowserRouter>
    );
  }
}

export default App;
