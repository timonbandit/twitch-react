import React, {Component} from "react";
import Header from "./Header";

export default class page404 extends Component {

  render(){

    return <div>
      <Header/>
     404 ErOR <br />
      No route for {this.props.location.pathname}
      <h2><a href="/twitch-react/">Go home?</a></h2>
    </div>
  }
}