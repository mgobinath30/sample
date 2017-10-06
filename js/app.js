app = angular.module('app', ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider, $locationProvider){

  $routeProvider
  .when('/potterpics',{
    templateUrl: "../pages/potter.html"
  })
  .when('/events',{
    templateUrl: "../pages/events.html"
    //animation: 'first'
  })
  .when('/blaster',{
    templateUrl: "../pages/blaster.html"
    //animation: 'first'
  })
  .when('/bayberry',{
    templateUrl: "../pages/bayberry.html"
    //animation: 'first'
  })
  .when('/barberry',{
    templateUrl: "../pages/barberry.html"
    //animation: 'first'
  })
  .when('/mares',{
    templateUrl: "../pages/mars.html"
    //animation: 'first'
  })
  .when('/loxe',{
    templateUrl: "../pages/loxe.html"
    //animation: 'first'
  })
  .when('/rizikitoto',{
    templateUrl: "../pages/rizikitoto.html"
    //animation: 'first'
  })
  .when('/bilberry',{
    templateUrl: "../pages/bilberry.html"
  })
  .when('/vaporposter',{
    templateUrl: "../pages/vaporposter.html"
  })
  .when('/arweather',{
    templateUrl: "../pages/arweather.html"
  })
  .when('/weeklymotion',{
    templateUrl: "../pages/weeklymotion.html"
  })
  .when('/stitch',{
    templateUrl: "../pages/stitch.html"
  })
  .when('/',{
   templateUrl: "../pages/grid.html"
  })
  .otherwise({redirectTo: '/'});

}).animation('.reveal-animation', function() {
  return {
    enter: function(element, done) {
      element.css('display', 'none');
      element.fadeIn(500, done);
      return function() {
        element.stop();
      }
    },
    leave: function(element, done) {
      element.fadeOut(500, done);
      return function() {
        element.stop();
      }
    }
  }
});


app.controller('ctrl', function($scope, $rootScope){
  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
  $rootScope.animation = currRoute.animation;
  });
});
