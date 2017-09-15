import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./index.css";
export default class Header extends Component {

  render() {
    return (
      <div className="header">
        <nav className="main-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/stream">Stream</Link></li>
          <li><Link to="/products">Products</Link></li>
        </nav>
      </div>
    )
  }
}