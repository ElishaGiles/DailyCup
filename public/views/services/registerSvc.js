angular.module('tiara').service('registerService', function($http) {

  this.register = function(info) {
    // console.log(info);
    return $http ({
      method: "POST",
      url: "/API/register",
      data: info
    }).then(function(response) {
      // console.log('goooo');
      return response.data;
    }, function(err) {
      // console.log("you done messed up");
    });
  };

});
