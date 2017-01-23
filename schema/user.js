var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  todo: {type: String, required: true}
});

var User = mongoose.model('User', userSchema);

module.exports = User;