angular.module('tiara').controller('loginCtrl', function($scope, loginSvc) {

  $scope.login = function () {
    loginSvc.login($scope.login).then(function(response){
      console.log(response);
      if (!response) {
        $scope.login.Username = "";
        $scope.login.Password = "";
      }
    });
  };

});
