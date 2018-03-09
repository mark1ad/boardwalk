import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";

import "./App.css";
import ShowCreateTaskModal from "./Components/ShowCreateTaskModal";

import Header from "./Components/Header";
import ShowBoardList from "./Components/ShowBoardList";
import ShowBoardDetailsContainer from "./Components/ShowBoardDetailsContainer";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <ShowCreateTaskModal />
          <div className="main-container">
            <Header />
            <Route exact path="/" component={ShowBoardList} />
            <Route exact path="/board/:id"
              component={ShowBoardDetailsContainer}
            />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
