
var listController = require('../controllers/listController.js');
var quoteController = require('../controllers/quoteController.js');


module.exports = function(app, express) {
  app.get('/list', listController.getAllTodos);
  app.get('/list/completed', listController.getCompleted);
  app.post('/list', listController.addToList);
  app.put('/list', listController.toggleCompletion);
  app.delete('/list', listController.deleteTodos);

  // app.get('/quotes', quoteController.fetchQuote);

  app.use(function(req, res) {
    console.log('Unhandled server request');
    console.log(req.body);
  });
};