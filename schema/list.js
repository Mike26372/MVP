var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');


var listSchema = new Schema({
  userId: {type: Number, required: true},
  user: {type: String, required: true, unique: true},
  task: {type: String, required: true},
  completed: {type: Boolean},
  'createdAt': {type: Date},
  'updatedAt': {type: Date}
});

listSchema.plugin(autoIncrement.plugin, 'List');

listSchema.pre('save', function(next) {
  var now = new Date();
  this.updatedAt = now;
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
})

// Add methods to schema
// listSchema.methods.hashPassword

var List = mongoose.model('List', listSchema);

module.exports = List;