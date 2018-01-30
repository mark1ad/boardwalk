import React, { Component } from 'react';

import './App.css';

import Header from './Components/Header';
import ShowBoardList from './Components/ShowBoardList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ShowBoardList />
      </div>
    );
  }
}

export default App;
