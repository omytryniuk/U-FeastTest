import React from 'react';
import {Sales} from '../api/sales';
import {Meteor} from 'meteor/meteor';

export default class Solution2 extends React.Component {

  constructor(props){
    super(props);
    this.state={
      events:[],
    };
  }

  //Update data
  setNewRandomData(){
    Meteor.call('getRandomEvents', (err, res)=>{
      if(!err) {
        localStorage.setItem("dataTimeStamp", new Date())
        localStorage.setItem("randomData",JSON.stringify(res));
      }else{
        alert("Error")
      }
    });
  }

  getEvents(){
    let localStorageData = localStorage.getItem("randomData")
    //check whether LocalStorage data is available
    if(localStorageData && localStorage.getItem("randomData")){
      //comparing whether current time is one day after timeStamp
      var currentDate =  new Date();
      var pastDate = new Date(localStorage.getItem("dataTimeStamp"));
      // 86400 seconds in 24hrs
      // getTime() will return you date in milliseconds
      //One day has passed -> update Time and Data
      if(86400000 < currentDate.getTime()-pastDate.getTime()){
        setNewRandomData();
      }else{
        this.setState({events:JSON.parse(localStorage.getItem("randomData"))});
      }
    }else{
      this.setState({events:JSON.parse(localStorage.getItem("randomData"))});
    }
  }

  renderEvents(){
    return this.state.events.map((event)=>{
        return (
          <div key = {event._id}>
            <h1>{event.name}</h1>
            <p>{event.city}</p>
            <p>{event.food}</p>
          </div>)
        })
  }

  render(){
    return (
      <div>
        <div> <h1>Daily Random Experience</h1></div>
          <button onClick={this.getEvents.bind(this)}>Get Events</button>
          {this.renderEvents()}
        </div>
    )
  }
}
