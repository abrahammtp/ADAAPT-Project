
// var db = require('../models');
// var db = require('../models');

module.exports = function (app) {
  // Load index page
  app.get('/', function (req, res) {
    res.render('welcome');
  });

  app.get('/data', function (req, res) {
    res.render('data');
  });

  app.get('/signup', function (req, res) {
    res.render('signup');
  });

  app.get('/login', function (req, res) {
    res.render('login');
  });

  // Load example page and pass in an example by id

  // app.get('/data', function (req, res) {
  //   res.render('data');
  // });

  // // Requiring path to so we can use relative routes to our HTML files
  var path = require('path');

  // // Requiring our custom middleware for checking if a user is logged in
  var isAuthenticated = require('../config/middleware/isAuthenticated');

  app.get('/members', isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, '../public/members.html'));
  });
  // Render 404 page for any unmatched routes
  app.get('*', function (req, res) {
    res.render('404');
  });
};
