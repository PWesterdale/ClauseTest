'use strict';

/* Directives */

angular.module('cm.directives', [])
.directive('contenteditable', function() {
	return {
	  restrict: 'A', // only activate on element attribute
	  require: '?ngModel', // get a hold of NgModelController
	  link: function(scope, element, attrs, ngModel) {
	    if(!ngModel) return; // do nothing if no ng-model

	    // Specify how UI should be updated
	    ngModel.$render = function() {
	      element.html(ngModel.$viewValue || '');
	    };

	    // Listen for change events to enable binding
	    element.on('blur keyup change', function() {
	      read();
	    });


	    // Write data to the model
	    function read() {
	      var html = element.html();
	      ngModel.$setViewValue(html);
	    }
	  }
	};
});