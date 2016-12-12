angular.module('tiara').controller('homeCtrl', function($scope) {

  $scope.validKey = false;
  $scope.keyPlace = true;

  $scope.checkUser = (key) => {
    if(key === '55443') {
      $scope.validKey = true;
      $scope.keyPlace = false;
    }
    else {
      alert("Invalid Key");
      $scope.key = "";
    }
  }

})
