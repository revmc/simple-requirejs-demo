define(function() {
	
	return {

		insertText: function(id, text) {

			var element = document.getElementById(id);

			element.innerHTML = text;

		}

	}

})