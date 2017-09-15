import React, {Component} from "react";
import Header from "./Header";
import ajax_get from "./lib/ajax_get";

export default class StreamPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //user: [],
      stream: []
    };
    this.user = this.props.match.params.id;
    this.apiAddr = 'https://wind-bow.glitch.me/twitch-api/';

  }

  componentDidMount() {

    /*    ajax_get(this.apiAddr + "users/" + this.user)
          .then(JSON.parse)
          .then((data) => {
            this.setState({user: data});

          }).catch((err) => {
          console.log(err)
        });*/

    ajax_get(this.apiAddr + "streams/" + this.user)
      .then(JSON.parse)
      .then((data) => {
        this.setState({stream: data.stream})
      }).catch((err) => {
      this.setState({stream: "nothing"});
      console.log(err)
    });
  }


  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <div className="channel_name">
            <h1>{this.props.match.params.id}</h1>
          </div>

          {this.state.stream.channel ?
            <div>
              <div className="stream">
                <iframe src={"https://player.twitch.tv/?channel="+this.state.stream.channel.display_name} frameBorder="0" allowFullScreen={true} scrolling="no" height="378" width="620"></iframe>
              </div>
            <div className="stream_info">
              <div className="left-aside">
                {console.log(this.state.stream)}
                <div className="stream_name">{this.state.stream.channel.display_name}</div>
                <div className="stream_game">{this.state.stream.game}</div>
                <div className="stream_description">{this.state.stream.channel.status}</div>

              </div>
              <div className="right-aside">
                <div className="stream_viewers">Зрителей: {this.state.stream.viewers}</div>
                <div className="stream_views">Просмотров: {this.state.stream.channel.views}</div>
                <div className="stream_link"><a href={this.state.stream.channel.url}>Посмотреть на твиче</a></div>
              </div>
            </div>
            </div> : <div>Loading...</div>
          }
        </div>
      </div>)


  }
}