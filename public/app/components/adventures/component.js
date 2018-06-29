angular
.module('app')
.component('adventures', {
    // controller: 'rsvpController', do i need a controller if theres no angularjs?
    templateUrl: '/app/components/adventures/adventures.html',
    bindToController: true //required for $scope to work
})

});
