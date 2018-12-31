require('styles/main');
var api = require('Api/users');
var $ = require('jquery');
var users = api.getUsers();
const sectionThreeSolution = require('sectionThreeSolution');
var welcomeUser = require('welcomeUser');
const ReactApp = require('./react/ReactApp');
const appConfig = require('typescript/appConfig');
sectionThreeSolution('USD', function (fxRate) {
  console.log(fxRate);
});
$.each(users, function (index, user) {
  // babel es2015
  $(document.body).append(`<p>${index} - name ${user.name} age ${user.age}</p>`);
});

// $.each(users, (index, user) => {
//     $(document.body).append("<p>name " + user.name + 'age' + user.age + "</p>")
// })

welcomeUser('Jones');