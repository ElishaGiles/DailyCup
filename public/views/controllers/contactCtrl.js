angular.module('tiara').controller('contact-ctrl', function($scope, contactService) {

  $scope.sendForm = function(form) {
    contactService.sendForm(form).then(function(response) {
      if(response.data === 'err') {
        console.log((err));
        alert('There was an error');
      }
      else {
        alert('Your Message was Sent');
      }

    });
  };

});
