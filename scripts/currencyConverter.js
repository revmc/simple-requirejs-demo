define(function() {

	var britishPoundsToDollarsRate = 0.81;
		
	return {

		convertCurrency: function(dollars) {
			return dollars * britishPoundsToDollarsRate;
		}

	}

});