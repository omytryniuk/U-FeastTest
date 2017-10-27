import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Sales} from './../imports/api/sales';
import App from './../imports/ui/App';
import Solution1 from './../imports/ui/solution1';
import Solution2 from './../imports/ui/solution2';
import { Router, Route, browserHistory } from 'react-router';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/s1" component={Solution1}/>
    <Route path="/s2" component={Solution2}/>
  </Router>
)

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
