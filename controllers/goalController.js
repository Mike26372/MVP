var Q = require('q');
var Goal = require('../schema/goal.js');
var utility = require('../utility/utility-func.js');

var createGoalItem = Q.nbind(Goal.create, Goal);
var findGoalItems = Q.nbind(Goal.find, Goal);
var updateGoalItems = Q.nbind(Goal.update, Goal);
var removeGoalItems = Q.nbind(Goal.remove, Goal);

module.exports = {
  
  addToGoals: function(req, res, next) {
    
    const newGoalItem = {
      userId: req.body.userId,
      user: req.body.user,
      task: req.body.task,
      completed: false
    };

    createGoalItem(newGoalItem)
    .then((data) => {
      console.log('New goal item saved!');
      return res.status(201).json(data);
    })
    .fail((err) => {
      console.error('Goal item could not be saved, try again noob');
      console.error(err);
      return res.status(404).end();  
    });
  },

  getAllGoals: function(req, res, next) {
    
    findGoalItems({completed: false})
    .then((goalItems) => {
      return goalItems.reverse();
    })
    .then((goalItems) => {
      return res.status(200).json(goalItems);
    })
    .catch((error) => {
      console.error('Goal items could not be retrieved');
      return res.status(404).end();
    });
  },

  toggleCompletion: function(req, res, next) {
    
    updateGoalItems({_id: req.body._id}, {completed: req.body.completed}, {})
    .then((listItem) => {
      console.log('List item updated');
      return res.status(202).end();
    })
    .catch((err) => {
      console.log('List item update failed');
      return res.status(404).end();
    });
  },

  deleteGoals: function(req, res, next) {
    removeGoalItems({_id: req.body._id})
    .then(() => {
      console.log('Item removed');
      return res.status(200).end();
    })
    .catch((err) => {
      console.error('Item could not be removed');
      return res.status(404).end();
    });
  },

  getCompleted: function(req, res, next) {
    
    findGoalItems({completed: true})
    .then((goalItems) => {
      return goalItems.reverse();
    })
    .then((goalItems) => {
      return res.status(200).json(goalItems);
    })
    .catch((error) => {
      console.error('List items could not be retrieved');
      return res.status(404).end();
    });
  },

  updateDescription: function(req, res, next) {

    updateGoalItems({_id: req.body._id}, {task: req.body.task, description: req.body.description}, {})
    .then((goalItem) => {
      console.log('Goal description updated');
      return res.status(202).end();
    })
    .catch((err) => {
      console.log('Goal description update failed');
      return res.status(404).end();
    });
  }

};