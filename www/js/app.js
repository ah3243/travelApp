// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'firebase', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
      
  });
})

.config(function($stateProvider, $urlRouterProvider) {
 
  $stateProvider
  .state('login', {
    url: '/',
    templateUrl: 'templates/login.html',
    controller: 'ListCtrl'
  })
  // .state('signup', {
  //   url: '/signup',
  //   templateUrl: 'templates/signup.html',
  //   controller: 'LoginCtrl'
  // });
 
  $urlRouterProvider.otherwise("/");
 
})


.controller('ListCtrl', function($scope){
    $scope.login = function(){
      console.log("Logging in..");

      // function onSignIn(googleUser) {
      //   var profile = googleUser.getBasicProfile();
      //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      //   console.log('Name: ' + profile.getName());
      //   console.log('Image URL: ' + profile.getImageUrl());
      //   console.log('Email: ' + profile.getEmail());
      // }

//        Auth.$authWithOAuthRedirect("facebook");
      return ;
    }

    $scope.items = 'Hello';

    $scope.addItem = function(){
        var name = prompt("what do you need to buy?");
        if(name){
            $scope.items.$add({
                "name":name
            });
        }    
      return;   
    };          
});




