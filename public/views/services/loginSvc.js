angular.module('tiara').service('loginSvc', function($http, $state) {

  this.loginUser = function(login) {
    console.log("svc login object",login);
    return $http ({
      method: 'GET',
      url: '/API/login/' + login.Username + '/' + login.Password
    }).then(function(response) {
      console.log(response);
      if (response.data[0]) {
        $state.go('a-blog');
        return true;
      } else {
        alert("You are not a valid user. Please register!");
        return false;
      }
      // return response.data;

    });
  };

});
