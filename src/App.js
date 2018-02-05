import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import './App.css';

import Header from './Components/Header';
import ShowBoardList from './Components/ShowBoardList';
import ShowBoardDetailsContainer from './Components/ShowBoardDetailsContainer';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={ShowBoardList} />
          <Route exact path="/board/:id/:name"
            component={ShowBoardDetailsContainer} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
