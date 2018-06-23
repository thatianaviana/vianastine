angular
.module('app')
.component('rsvp', {
    controller: 'rsvpController',
    templateUrl: '/app/components/rsvp/rsvp.html',
    bindToController: true //required for $scope to work
})
.controller('rsvpController',function($scope, UserFactory){
    $scope.user = UserFactory;
});
