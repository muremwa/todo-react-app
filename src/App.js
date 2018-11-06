import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";


import './App.css';
import NavBar from "./pages/Header";
import Todos from "./pages/Home";
import { Error404 } from './pages/404';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavBar/>
            <Switch>
              <Route path="/" component={Todos} exact/>
              <Route component={Error404}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
