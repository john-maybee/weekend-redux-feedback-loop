import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import FeedbackLog from '../FeedbackLog/FeedbackLog.jsx';
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';

function App() {
  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <div>
          <Route exact path="/feedbackLog">
            <FeedbackLog />
          </Route>
          <Route exact path="/">
            <Feeling />
          </Route>
          <Route exact path="/step/understanding">
            <Understanding />
          </Route>
          <Route exact path="/step/support">
            <Support />
          </Route>
          <Route exact path="/step/comments">
            <Comments />
          </Route>
          <Route exact path="/step/Review">
            <Review />
          </Route>
          {/* <Route exact path="/step/ThankYouLanding"> */}
            {/* <ThankYouLanding /> */}
          {/* </Route> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
