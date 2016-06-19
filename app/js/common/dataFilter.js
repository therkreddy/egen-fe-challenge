app.filter('dataFilter', function() {
	return function(input) {
		if(input == undefined || input == null) {
			return 'No Data returned';
		} else {
			return input;
		}
	};
});