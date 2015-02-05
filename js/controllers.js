'use strict';

/* Controllers */

angular.module('cm.controllers', [])
.controller('editorCtrl', ['$scope', function($scope) {

	$scope.inputs = {
		data : [
			'<i>Hello</i> world...<br /><br />This is some awesome content<br /><br />Isn\'t it awesome?<br /><br />I like it'
		]
	};

	$scope.addInput = function(){
		$scope.inputs.data.push('');
	}

	$scope.removeInput = function(index){
		$scope.inputs.data.splice(index, 1);
	}

	$scope.sortableOptions = {
    	handle: '.handle'
	}


}])