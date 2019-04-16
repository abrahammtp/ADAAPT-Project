var db = require('../models');
var passport = require('../config/passport');

module.exports = function (app) {
  app.post('/api/login', passport.authenticate('local'), function (req, res) {
    res.json('/data');
  });

  app.post('/api/signup', function (req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      nickname: req.body.nickname,
      dob: req.body.dob,
      location: req.body.location,
      gender: req.body.gender
    }).then(function () {
      res.redirect(307, '/api/login');
    }).catch(function (err) {
      console.log(err);
      res.json(err);
    });
  });
  app.get('/api/examples', function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post('/data', function (req, res) {
    console.log(req.body);
    db.Answers.create({
      concert: req.body.concert,
      place: req.body.place,
      restaurant: req.body.restaurant,
      movie: req.body.movie,
      book: req.body.book,
      activity: req.body.activity,
      goal: req.body.goal
    }).then(function () {
      res.redirect(307, '/');
      //  Here is where we are going to redirect them to the page   where they can see their answers
    }).catch(function (err) {
      console.log(err);
      res.json(err);
    });
  });

  // Delete an example by id
  app.delete('/api/examples/:id', function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
  // Route for logging user out
  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });
};
