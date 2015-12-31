var Router = require('express').Router();
var DBController = require('./DBController');

// full route would be http://localhost:8000/students/
Router.route('/')
  // get all students
  .get(function(req, res){
    DBController.get(req.query, function(err, student){
      if(err) {
        return res.json({error: err});
      } else {
        return res.json(student);
      }
    });
  })
  // create a singular student
  .post(function(req, res){
    DBController.post(req.body, function(err, result){
      // console.log(req.body);
      if (err) {
        return res.json({error: err});
      } else {
        return res.json(result);
      }
    });
  })
  // remove students matching req.body
  .delete(function(req, res){
    DBController.delete(req.body, function(err, data) {
      if(err) {
        return res.json({error: err});
      } else {
        return res.json({messsage: 'Successfully removed ' + data.result.n + ' character(s)'});
      }
    });
  });


// full route would be http://localhost:8000/students/id/ID_NUMBER
Router.route('/id/:id')
  // get student at this id
  .get(function(req, res){
    DBController.getOne({_id: req.params.id}, function(err, student){
      if (err) {
        return res.json({error: err});
      } else {
        return res.json(student);
      }
    });
  })
  // update student with this id
  .put(function(req, res){
    DBController.updateOne(req.params.id, req.body, function(err, student) {
      // console.log(req.body);
      if (err) {
        return res.json({error: err});
      } else {
        console.log(student);
        res.json(student);
      }
    });
  })
  // delete the student with this id
  .delete(function(req, res){
    DBController.deleteOne(req.params.id, function(err, data) {
      if (err) {
        return res.json({error: err});
      } else {
        return res.json(data);
      }
    });
  });


// full route would be http://localhost:8000/students/cohort/COHORT_NUMBER
Router.route('/cohort/:cohort')
  // get student at this cohort
  .get(function(req, res){
    DBController.get({cohort: req.params.cohort}, function(err, students) {
      if (err) {
        return res.json({error: err});
      } else {
        return res.json(students);
      }
    });
  });

module.exports = Router;
