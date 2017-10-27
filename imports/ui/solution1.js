import React from 'react';
import {Sales} from '../api/sales';
import {Meteor} from 'meteor/meteor';

export default class Solution1 extends React.Component {

  constructor(props){
    super(props);
    this.state={
      amount:0,
    };
  }

  getTotalAmount(){
    Meteor.call('getTotal', (err, res)=>{
      if(!err) {
        this.setState({amount:res[0].totalSum.toFixed(3)})
        return
      }else{
        alert("Error")
      }
    });
  }

  render(){
    return (
      <div>
        <div> <h1>Need a number</h1> </div>
        <button onClick={this.getTotalAmount.bind(this)}>Get Total</button>
      <div>Total is :{this.state.amount}</div>
      </div>
    )
  }
}
