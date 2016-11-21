angular.module('tiara').controller('mobileController', function($scope) {

  $scope.toggleMenu = function() {
    $scope.menuOpen = !$scope.menuOpen;
  }

})
