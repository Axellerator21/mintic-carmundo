import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// eslint-disable-next-line import/named
import { Footer, WhatGPT3, Header, TaskMe, Mecanico, TaskRemover, TaskVer, Login } from './containers';
import { Navbar, Service, Brand } from './components';

import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <Switch>
        <Route path="/task-maneger">
          <div>
            <TaskMe />
          </div>
        </Route>
        <Route path="/service">
          <div>
            <Service />
          </div>
        </Route>
        <Route path="/clientes">
          <div>
            <WhatGPT3 />
          </div>
        </Route>
        <Route path="/mecanico">
          <div>
            <Mecanico />
          </div>
        </Route>
        <Route path="/taskRemover">
          <div>
            <TaskRemover />
          </div>
        </Route>
        <Route path="/taskVer">
          <div>
            <TaskVer />
          </div>
        </Route>
        <Route path="/login">
          <div>
            <Login />
          </div>
        </Route>
        <Route path="/taskma">
          <div>
            <TaskMe />
          </div>
        </Route>
        <Route path="/">
          <div className="gradient__bg">
            <Header />
          </div>
          <Service />
          <WhatGPT3 />
          <Brand />
        </Route>
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
