'use strict';

// Declare app level module which depends on filters, and services
angular.module('cm', [
  'ngRoute',
  'cm.services',
  'cm.directives',
  'cm.controllers',
  'ngSanitize',
  'ui.sortable'
]).
config(['$routeProvider', function($routeProvider) {


	$routeProvider.when('/home', {templateUrl: '/partials/editor.html', controller: 'editorCtrl'});
	$routeProvider.otherwise({redirectTo: '/home'});

}]);