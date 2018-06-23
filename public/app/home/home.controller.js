angular
.module('app.home')
.controller('HomeController', function($scope, $firebaseArray, Notification){
    //Load firebase guests into $scope;
  var ref = firebase.database().ref('attendingList');
  $scope.attendingList = $firebaseArray(ref);

  $scope.attendance = {
    rsvp: '',
    name: '',
    email: ''
  }

  $scope.submit = function() {
    console.log("is this working?");
    ref.push($scope.attendance);
    $scope.attendance = {
      rsvp: '',
      name: '',
      email: '',
    };
    // Notification.success({message: "Thanks for the Reply!"})
  }

  // $scope.youGotIt = function(){
  //
  //   console.log("you got it");
  // }

});
