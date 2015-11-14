var app = angular.module('billyMech', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'js/views/homeTmpl.html',
            controller: 'homeCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'js/views/aboutTmpl.html',
            controller: 'aboutCtrl'
        })
        .state('portfolio', {
            url: '/portfolio',
            templateUrl: 'js/views/portTmpl.html'
        })
        
})