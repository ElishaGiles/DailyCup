angular.module('tiara').controller('aBlogCtrl', function($scope, aBlogSvc) {

  $scope.blogPostNew = true;
  $scope.publishBlogPost = true;

  $scope.createPost = function() {
    $scope.blogPostNew = false;
    $scope.publishBlogPost = false;
  };

  $scope.publishPost = function(blogPost) {
    aBlogSvc.publishBlog($scope.id, blogPost).then(function(response){});
  };


aBlogSvc.get_user().then(function(response) {

});


  // loginSvc.loginUser($scope.login).then(function(response){
  //   console.log(response);
  //   $scope.user = response;
  //   if (!response) {
  //     $scope.login.Username = "";
  //     $scope.login.Password = "";
  //   }
  // });

});
