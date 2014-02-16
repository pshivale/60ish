var demoApp = angular.module('demoApp', ['ngRoute']);

demoApp.config(function($routeProvider){
	$routeProvider
	.when('/',
			{
				controller: 'SimpleController',
				templateUrl: 'partials/view1.html'
			}
		)
	.when('/view2',
			{
				controller: 'SimpleController',
				templateUrl: 'partials/view2.html'
			}
		)
	.otherwise({redirectTo: '/'});
});

demoApp.factory('simpleFactory', function(){
	var players = [
		{name: 'Ronaldo', club: 'Real Madrid', weekly: '1000'},
		{name: 'Van parsie', club: 'Manchester United', weekly: '900'},
		{name: 'Messi', club: 'Barcelona', weekly: '1010'},
		{name: 'Silva', club: 'Manchester City', weekly: '850'}
	];
	var factory = {};
	factory.getPlayers = function(){
		return players;
	};
	factory.postPlayer = function(player){

	};
});

demoApp.controller('SimpleController', [ '$scope', 'simpleFactory' , function($scope, simpleFactory){
	$scope.players = [];
	
	init();

	function init(){
		players = simpleFactory.getPlayers();
	}
	
	$scope.addPlayer = function(){
		$scope.players.push(
			{
				name: $scope.newPlayer.name,
				club: $scope.newPlayer.club,
				weekly: $scope.newPlayer.weekly
			});
	}
}]);