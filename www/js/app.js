angular.module('starter',['ionic','starter.controllers'])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('app',{
		url: '/app',
		abstract: true,
		templateUrl:'templates/menu.html'
	})
	.state('app.about',{
		url: '/about',
		views: {
			'menuContent':{
				templateUrl:'templates/about.html',
				controller: 'MyCtrl'
			}
		}
	})
	.state('app.logs',{
		url: '/logs',
		views: {
			'menuContent':{
				templateUrl:'templates/logs.html'
			}
		}
	})
	.state('app.api',{
		url: '/api',
		views: {
			'menuContent':{
				templateUrl:'templates/api.html'
			}
		}
	})
	.state('app.home',{
		url: '/home',
		views: {
			'menuContent':{
				templateUrl:'templates/home.html',
				controller: 'MyCtrlr'
			}
		}
	})

	.state('app.tips',{
		url: '/tips',
		views: {
			'menuContent':{
				templateUrl:'templates/tips.html',
			}
		}
	})

	$urlRouterProvider.otherwise('/app/home');
});