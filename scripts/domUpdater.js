define(function() {
	
	return {

		insertText: function(id, text) {
			var element = document.getElementById(id);
			console.log('element : ', element);
			element.appendChild(document.createTextNode(text));
		}

	}

})