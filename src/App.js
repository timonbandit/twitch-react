import React, {Component} from "react";
import Header from "./Header";
import StreamerItem from "./Streamer-item";
import ajax_get from "./lib/ajax_get";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: [],
      stream: [],
      filter: "all"
    };
    this.apiAddr = 'https://wind-bow.glitch.me/twitch-api/';
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(e) {

    this.setState({"filter": e.target.id});
  }


  componentWillMount() {
    this.props.streamers.map((item, key) => {

      ajax_get(this.apiAddr + "users/" + item)
        .then(JSON.parse)
        .then((data) => {
          data.uid = key;
          let joined = this.state.user.concat(data);
          this.setState({user: joined});

        }).catch((err) => {
        console.log(err)
      });

      ajax_get(this.apiAddr + "streams/" + item)
        .then(JSON.parse)
        .then((data) => {
          data.uid = key;
          let joined = this.state.stream.concat(data);
          this.setState({stream: joined})
        })


    });
  }

  render() {
    return (<div>
      <Header/>
      <div className="container">
        <div className="filter">
          <input type="radio" name="filter" id="offline" onChange={this.handleFilter}
                 checked={this.state.filter === "offline"}/>
          <label htmlFor="offline">Offline</label>
          <input type="radio" name="filter" id="online" onChange={this.handleFilter}
                 checked={this.state.filter === "online"}/>
          <label htmlFor="online">Online</label>
          <input type="radio" name="filter" id="all" onChange={this.handleFilter}
                 checked={this.state.filter === "all"}/>
          <label htmlFor="all">All</label>
        </div>
        <ul className="streamers">
          {this.state.user.map((item, key) => {

            let currentStream = this.state.stream.find((elem) => {
              return elem.uid === item.uid;
            });

            let game,
              streaming,
              status;

            if (currentStream === undefined) {
              game = "Account Closed";
              streaming = "offline";
            } else if (currentStream.stream === null) {
              streaming = "offline"
            } else {
              game = currentStream.stream.game;
              streaming = "online";
              status = currentStream.stream.channel.status
            }
            if (this.state.filter === "offline" && streaming !== "offline") {
              return;
            }
            if (this.state.filter === "online" && streaming !== "online") {
              return;
            }
            return (<StreamerItem
              display_name={item.display_name}
              streaming={streaming}
              logo={item.logo}
              name={item.name}
              game={game}
              status={status}
              key={key}
            />)


          })}
        </ul>
      </div>

    </div>)
  }
}

export default App;