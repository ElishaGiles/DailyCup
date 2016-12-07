angular.module('tiara').controller('loginCtrl', function($scope, loginSvc) {

  $scope.loginUser = function () {
    console.log("login Ctrl", $scope.login);
    loginSvc.loginUser($scope.login).then(function(response){
      console.log(response);
      if (!response) {
        $scope.login.Username = "";
        $scope.login.Password = "";
      }
    });
  };

});
