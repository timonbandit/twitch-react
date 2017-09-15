import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StreamPage from "./StreamPage";
import page404 from "./page404";
import FilterableProductTable from "./product";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';


let PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

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
        <Route exact path="/" render={() => <App streamers={streamersList}/>}/>
        <Route path="/stream/:id" component={StreamPage}/>
        <Route path="/products" render={() => <FilterableProductTable products={PRODUCTS}/>}/>

        <Route component={page404}/>
      </Switch>
    </div>
  </Router>

  , document.getElementById('root')
);

registerServiceWorker();
