// Initialize Firebase
var config = {
  apiKey: "AIzaSyCxA5AZmaltmkLUYrqO4YHMktCeZzlZwZA",
  authDomain: "vianast-b025a.firebaseapp.com",
  databaseURL: "https://vianast-b025a.firebaseio.com",
  projectId: "vianast-b025a",
  storageBucket: "vianast-b025a.appspot.com",
  messagingSenderId: "81017433177"
};
firebase.initializeApp(config);

angular
.module('app', ['ui.router','firebase','app.home','ui-notification'])
.config(function($urlRouterProvider, NotificationProvider){
  $urlRouterProvider.otherwise('/');

  NotificationProvider.setOptions({ //this is the thank you notification when you submit your info
      delay: 5000,
      startTop: 50,
      startRight: 40,
      verticalSpacing: 20,
      horizontalSpacing: 20,
      positionX: 'right',
      positionY: 'bottom'
  });

});
