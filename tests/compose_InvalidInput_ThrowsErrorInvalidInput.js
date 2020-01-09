//compose_InvalidInput_ThrowsErrorInvalidInput.js: Testing logic.

define([
	"compose"
], function(
	compose
) {
	return {
		"Name":"compose_InvalidInput_ThrowsErrorInvalidInput",
		"Input": {
			"Options": {
				"Property": "Value"
			},
			"Object": {
				"Headers": undefined,
				"Name": undefined,
				"Dependencies": undefined,
				"Exports": undefined,
				"Content": "function() {}"
			}
		},
		"Function": function( Input ) {
			return compose.call( Input.Object, Input.Options );
		},
		"ExceptionTest": true,
		"ExpectedOutput": { message: "Error: The input is invalid." },
		"Debug": false
	};
});
