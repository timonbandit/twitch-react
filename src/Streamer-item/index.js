import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./index.css";
import noPhoto from "./no-photo.png";

class StreamerItem extends Component {
  render() {
    return <Link to={"/stream/" + this.props.name} className="stream-item">
      <span className={"streaming "+ this.props.streaming}>{this.props.streaming}</span>
      <img className="stream-img" src={this.props.logo || noPhoto}/>
      <span className="stream-name">{this.props.display_name}</span>
      <span className="stream-game">{this.props.game || ""}</span>
      <span className="stream-status">{this.props.status}</span>
    </Link>
  }
}

export default StreamerItem;