app.directive('titleCard', function(){
	return {
		restrict: 'A',
		scope: {
          title : "@titleInfo",
		},
		template: '{{title}}',
		link: function($scope, elm, attr) {
			elm.bind('mouseover', function() {
               elm.css('background-color', '#ff6600');
               elm.css('color', 'white');
			});
			elm.bind('mouseleave', function(){
               elm.css('background-color', 'white');
               elm.css('color', '#ff6600');
			});
		}
	};
});