// import { HashRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

  return (
    <div className='App'>
      {/* <Router> */}
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <div>
          {/* <Route exact path="/"> */}
            {/* <FeedbackLog /> */}
          {/* </Route> */}
          {/* <Route exact path="/step/feeling"> */}
            {/* <Feeling /> */}
          {/* </Route> */}
          {/* <Route exact path="/step/understanding"> */}
            {/* <Understanding /> */}
          {/* </Route> */}
          {/* <Route exact path="/step/support"> */}
            {/* <Support /> */}
          {/* </Route> */}
          {/* <Route exact path="/step/comments"> */}
            {/* <Comments /> */}
          {/* </Route> */}
          {/* <Route exact path="/step/Review"> */}
            {/* <Review /> */}
          {/* </Route> */}
          {/* <Route exact path="/step/ThankYouLanding"> */}
            {/* <ThankYouLanding /> */}
          {/* </Route> */}
        </div>
      {/* </Router> */}
    </div>
  );
}

export default App;
