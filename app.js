const app = angular.module('app', ['ui.router'])

app.config(($stateProvider, $urlRouterProvider) => {

  $stateProvider.state({
    name: 'user',
    url: '/user',
    template: '<h1>Hello, {{name}}!</h1>',
    controller: function ($scope, userData) {
      $scope.name = userData.name;
    },
    resolve: {
      userData: (angularName) => ({
        name: angularName
      }),
      angularName: () => 'angular',
    }
  });

  $urlRouterProvider.otherwise('/user');

});

