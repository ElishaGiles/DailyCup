angular.module('tiara').controller('aBlogCtrl', function($scope, aBlogSvc) {

  $scope.blogPostNew = true;
  $scope.publishBlogPost = true;

  $scope.createPost = function() {
    $scope.blogPostNew = false;
    $scope.publishBlogPost = false;
  };

  aBlogSvc.get_blogPosts().then(function(response) {
    console.log("blogposts", response);
    $scope.blogPosts = response;
  });

  $scope.publishPost = function() {
    aBlogSvc.publishBlog($scope.user.user_id, $scope.blogPost).then(function(response){});
  };


aBlogSvc.get_user().then(function(response) {
  $scope.user = response;
  console.log(response);
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
