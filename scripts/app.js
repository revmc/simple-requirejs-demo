define(['currencyConverter', 'domUpdater'], function(currencyConverter, domUpdater) {

	function updatePage() {
		domUpdater.insertText('lbs', currencyConverter.convertCurrency(100));	
	}
	
	var dollarsInputField = document.getElementById('dollars');

	dollarsInputField.addEventListener('change', function(e) {
		domUpdater.insertText('lbs', currencyConverter.convertCurrency(e.target.value));
	})

	var inputValue = dollarsInputField.value;

})