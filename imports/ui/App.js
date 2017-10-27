import React from 'react';
import {Link} from 'react-router';

export default class App extends React.Component {
  render(){
    return (
      <div>
        <div> <h1> Coding questions</h1></div>
        <a href="/s1">Need a number</a><br/>
        <a href="/s2">Daily Random Experience</a>
      </div>
    )
  }
}
