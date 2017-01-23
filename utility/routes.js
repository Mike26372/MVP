
var listController = require('../controllers/listController.js');


module.exports = function(app, express) {
  app.get('/list', listController.getAllTodos);
  app.post('/list', listController.addToList);
  app.put('/list', listController.toggleCompletion);

  app.use(function(req, res) {
    console.log('Unhandled server request');
    console.log(req.body);
  });
}