import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './components/App.jsx';
import EventForm      from './components/EventForm/EventForm.jsx';
import { Router, Route, IndexRoute, browserHistory } from "react-router";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>

    {/* only using event form as routing example, but we'll most likely replace that route with a /profile route to profile component */}
    <Route path="/eventform" component={EventForm}></Route>
    {/* <Route path="/profile" component={EventForm}></Route> */}

  </Router>, document.querySelector('#root-container'));
