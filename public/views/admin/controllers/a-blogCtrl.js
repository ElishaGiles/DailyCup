angular.module('tiara').controller('aBlogCtrl', function($scope, aBlogSvc) {

  $scope.blogPostNew = true;
  $scope.publishBlogPost = true;

  $scope.createPost = function() {
    $scope.blogPostNew = false;
    $scope.publishBlogPost = false;
  };

  $scope.closePost = function() {
    $scope.blogPostNew = true;
    $scope.publishBlogPost = true;
  };

  aBlogSvc.get_blogPosts().then(function(response) {
    // response.map(function(i) {
    //   // i.blog_post = i.blog_post.replace(/<br>/g, '/n');
    // });
    for (var i = 0; i < response.length; i++) {
      if(response[i].blog_post) {
        if (response[i].blog_post.indexOf('<br>') !== -1) {
          response[i].blog_post = response[i].blog_post.split('<br>');
        } else {
          response[i].blog_post = [response[i].blog_post];
        }
      }
    }
    response = response.reverse();
    $scope.blog_posts = response;
    console.log(response);
  });

  $scope.publishPost = function(newPost) {
    const post = newPost.blogPost.replace(/\n/g, '<br>');
    aBlogSvc.publishBlog($scope.user.user_id, newPost.title, post).then(function(response){
      aBlogSvc.get_blogPosts().then(function(response) {
        // response.map(function(i) {
        //   // i.blog_post = i.blog_post.replace(/<br>/g, '/n');
        // });
        $scope.blog_posts = response;
      });

    });
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
