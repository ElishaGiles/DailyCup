angular.module('tiara').controller('contact-ctrl', function($scope, contactService) {

  $scope.sendForm = (form) => {
    contactService.sendForm(form).then((response, err) => {
      if(response.data === err) {
        console.log(('err'));
        alert('There was an error');
      }
      else {
        swal({
          title: "Your Message Was Sent",
          type: "success"
        })
      }

    });
  };

});
