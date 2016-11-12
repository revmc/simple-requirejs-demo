define(['currencyConverter', 'domUpdater'], function(currencyConverter, domUpdater) {

	domUpdater.insertText('lbs', currencyConverter.convertCurrency(100));
	
	console.log('$' + currencyConverter.convertCurrency(100));

})