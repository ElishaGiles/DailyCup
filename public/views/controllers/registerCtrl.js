angular.module('tiara').controller('registerCtrl', function($scope, registerService, $state) {

  var securityKey = 55443;

  $scope.register = function(info) {
    if(Number(info.securityKey) === securityKey) {
      // console.log(info);
      registerService.register(info).then(function(ctrlData) {
        // console.log(ctrlData);
        alert("You are now registered. Please login");
        $state.go("login");
      });
    }
    else {
      alert("You entered an invalid security key. Please obtain the correct one from Tiara");
    }
  };
});
