var Q = require('q');
var List = require('../schema/list.js');
var utility = require('../utility/utility-func.js');

var createListItem = Q.nbind(List.create, List);
var findListItems = Q.nbind(List.find, List);
var updateListItems = Q.nbind(List.update, List);
var removeListItems = Q.nbind(List.remove, List);

module.exports = {
  addToList: function(req, res, next) {
    
    const newListItem = {
      userId: req.body.userId,
      user: req.body.user,
      task: req.body.task,
      completed: false
    };

    createListItem(newListItem)
    .then((data) => {
      console.log('New list item saved!');
      return res.status(201).json(data);
    })
    .fail((err) => {
      console.error('List item could not be saved, try again noob');
      console.error(err);
      return res.status(404).end();  
    });
  },

  getAllTodos: function(req, res, next) {
    
    findListItems({completed: false})
    .then((listItems) => {
      return listItems.reverse();
      // return listItems.sort(utility.sortByCompleteComparator);
    })
    .then((listItems) => {
      return res.status(200).json(listItems);
    })
    .catch((error) => {
      console.error('List items could not be retrieved');
      return res.status(404).end();
    });
  },

  toggleCompletion: function(req, res, next) {
    
    updateListItems({_id: req.body._id}, {completed: req.body.completed}, {})
    .then((listItem) => {
      console.log('List item updated');
      return res.status(202).end();
    })
    .catch((err) => {
      console.log('List item update failed');
      return res.status(404).end();
    });
  },

  deleteTodos: function(req, res, next) {
    removeListItems({_id: req.body._id})
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
    
    findListItems({completed: true})
    .then((listItems) => {
      return listItems.reverse();
      // return listItems.sort(utility.sortByCompleteComparator);
    })
    .then((listItems) => {
      return res.status(200).json(listItems);
    })
    .catch((error) => {
      console.error('List items could not be retrieved');
      return res.status(404).end();
    });
  }
};