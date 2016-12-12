angular.module('tiara').controller('loginCtrl', function($scope, loginSvc) {

  $scope.loginUser = () => {
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
