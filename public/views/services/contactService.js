angular.module('tiara').service('contactService', function($http) {

  this.sendForm = (form) => {
    return $http ({
      method: 'POST',
      url: '/contact',
      data: form
    });
  };

});
