var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');


var goalSchema = new Schema({
  userId: {type: Number, required: true},
  user: {type: String, required: true},
  task: {type: String, required: true},
  description: {type: String},
  completed: {type: Boolean},
  'createdAt': {type: Date},
  'updatedAt': {type: Date}
});

goalSchema.plugin(autoIncrement.plugin, 'Goal');

goalSchema.pre('save', function(next) {
  var now = new Date();
  this.updatedAt = now;
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

// Add methods to schema
// goalSchema.methods.hashPassword

var Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;