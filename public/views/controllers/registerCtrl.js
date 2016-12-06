angular.module('tiara').controller('registerCtrl', function($scope, registerService, $state) {

  var securityKey = 55443;

  $scope.register = function(info) {
    if(Number(info.securityKey) === securityKey) {
      // console.log(info);
      registerService.register(info).then(function(ctrlData) {
        // console.log(ctrlData);
        $state.go("login");
      });
    }
    else {
      alert("Invalid Security Key");
    }
  };
});
