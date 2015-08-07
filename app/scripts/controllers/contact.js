'use strict';

/**
 * @ngdoc function
 * @name cleanBlogApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the cleanBlogApp
 */
angular.module('cleanBlogApp')
  .controller('ContactCtrl', function ($scope, localStorageService, $location) {
  	var feedbackHistory = localStorageService.get('feedbackHistory');
  	$scope.feedback = function(){
  		if ($scope.contactForm.$valid) {
	  		console.log($scope.name+" : "+$scope.email+" : "+$scope.phone+" : "+$scope.message);
	  		feedbackHistory = {
	  			name : $scope.name,
	  			email : $scope.email,
	  			phone : $scope.phone,
	  			message : $scope.message
	  		};
	  		localStorageService.set('feedbackHistory', feedbackHistory);
	  		$scope.feedbackHistory = feedbackHistory;
	  		alert("Thank you!");
	  		$location.path( "/" );
  		}
  	};
  	$scope.feedbackHistory = feedbackHistory;
  });
