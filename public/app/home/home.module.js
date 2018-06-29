angular
.module('app.home',[])
.config(function($stateProvider){
  $stateProvider
  .state({
    name: 'home',
    url: '/',
    controller: 'HomeController',
    templateUrl: 'app/home/home.html' //added index.html - didnt seem ton work
  })
  .state({
    name: 'rsvp',
    url: '/',
    controller: 'rsvpController',
    templateUrl: 'app/components/rsvp/rsvp.html' //added index.html - didnt seem ton work
  })
  .state({
    name: 'adventures',
    url: '/',
    templateUrl: 'app/components/adventures/adventures.html' //added index.html - didnt seem ton work
  })

});
