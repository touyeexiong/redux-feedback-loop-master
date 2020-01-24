import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

// component imports
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

class App extends Component {
  render() {
    return (
      <>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>

          <div>
            <Router>
              <div>
                <Route exact path ="/" component={Feeling} />
                {/* <Route exact */}
                <Route exact path="/understanding" component={Understanding} />
              </div>
            </Router>
          </div>
        <br />
      </div>
      </>
    );
  }
}

export default connect()(App);
