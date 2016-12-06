angular.module('tiara').service('loginSvc', function($http, $state) {

  this.login = function(login) {
    return $http ({
      method: 'GET',
      url: '/API/login/' + login.Username + '/' + login.Password
    }).then(function(response) {
      console.log(response);
      if (response.data[0]) {
        $state.go('meet-tiara');
        return true;
      } else {
        alert("You got an empty array!");
        return false;
      }
      // return response.data;

    });
  };

});
