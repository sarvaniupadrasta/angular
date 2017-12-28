movieStubApp.config(function ($locationProvider,$routeProvider){
	$locationProvider.hashPrefix('');
	$routeProvider
		.when('/',{
			templateUrl :"tmpl/home.html",
			controller:'movieStubController'
		}).when('/movie/:id',{
			templateUrl : 'tmpl/movie.html',
			controller : "movieDetailsController"
		}).otherwise({
			redirectTo : '/'
		});
});