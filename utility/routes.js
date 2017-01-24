
var listController = require('../controllers/listController.js');
var quoteController = require('../controllers/quoteController.js');
var goalController = require('../controllers/goalController.js');


module.exports = function(app, express) {
  app.get('/list', listController.getAllTodos);
  app.get('/list/completed', listController.getCompleted);
  app.post('/list', listController.addToList);
  app.put('/list', listController.toggleCompletion);
  app.delete('/list', listController.deleteTodos);

  app.get('/goal', goalController.getAllGoals);
  app.get('/goal/completed', goalController.getCompleted);
  app.post('/goal', goalController.addToGoals);
  app.put('/goal', goalController.updateDescription);
  app.delete('/goal', goalController.deleteGoals);

  app.use(function(req, res) {
    console.log('Unhandled server request');
    console.log(req.body);
    res.status(404).end();
  });
};