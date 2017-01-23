var Q = require('q');
var List = require('../schema/list.js');

var createListItem = Q.nbind(List.create, List);
var findListItems = Q.nbind(List.find, List);

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
    
    findListItems({})
    .then((listItems) => {
      return listItems.reverse();
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