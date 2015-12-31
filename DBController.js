var Student = require('./Student.js');

exports.get = function(query, callback) {
  Student.find(query, callback);
};

exports.post = function(student, callback) {
  Student.create(student, callback);
};

exports.getOne = function(query, callback) {
  Student.findOne(query, callback);
};

exports.updateOne = function(id, updated, callback) {
  Student.findOneAndUpdate({_id: id}, updated, {new: true}, callback);
};

exports.deleteOne = function(id, callback) {
  Student.findOneAndRemove({_id: id}, callback);
};

exports.delete= function(query, callback) {
  Student.remove(query, callback);
};
