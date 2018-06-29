angular
.module('app')
.component('rsvp', {
    controller: 'rsvpController',
    templateUrl: '/app/components/rsvp/rsvp.html',
    bindToController: true //required for $scope to work
})
.controller('rsvpController',function($scope, $firebaseArray, Notification){
  //Load firebase guests into $scope;
  var ref = firebase.database().ref('attendingList');
  $scope.attendingList = $firebaseArray(ref);

  $scope.attendance = {
    rsvp: '',
    name: '',
    email: ''
  }

  $scope.submit = function() {
    console.log($scope.attendance);
    ref.push($scope.attendance);
    $scope.attendance = {
      rsvp: '',
      name: '',
      email: '',
    };
    Notification.success({message: "Thanks for the RSVP!"})
}

});
