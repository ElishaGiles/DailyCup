angular.module('tiara').controller('loginCtrl', function($scope, loginService) {

  $scope.register = function(info) {
    console.log(info);
    loginService.register(info).then(function(ctrlData) {
      console.log(ctrlData);
    })
  }

})
