import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StreamPage from "./StreamPage";
import page404 from "./page404";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

const streamersList = ["ESL_SC2",
  "OgamingSC2",
  "cretetion",
  "freecodecamp",
  "storbeck",
  "habathcx",
  "RobotCaleb",
  "noobs2ninjas",
  "ALOHADANCETV",
  "ramzesdoto",
  "nooneboss",
  "4567fusjdlfsdfrgb",
  "stray228",
  "ybicanoooobov"];


ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/twitch-react/" render={() => <App streamers={streamersList}/>}/>
        <Route path="/twitch-react/stream/:id" component={StreamPage}/>
        <Route component={page404}/>
      </Switch>
    </div>
  </Router>

  , document.getElementById('root')
);

registerServiceWorker();
