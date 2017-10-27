import {Sales} from './../imports/api/sales';
import {Events} from './../imports/api/events';
import {Meteor} from 'meteor/meteor';

/*
Meteor.startup(() => {
    Events.insert({
    name:'Event7',
    city:'Italy',
    food:'pizza'
  });
});
*/

Meteor.startup(() => {

  Meteor.methods({
    getTotal(){
      let pr =Sales.aggregate([
        {$group:
          {_id:'',
            totalSum:{$sum:'$amount'},
          }
        }
      ]);
    return pr;
    },
    getRandomEvents(){
      return Events.aggregate([{$sample: {size: 3}}]);
    }
  });
});
