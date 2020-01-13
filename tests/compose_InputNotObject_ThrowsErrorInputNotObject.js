//compose_InputNotObject_ThrowsErrorInputNotObject.js: Testing logic.

define([
	"compose"
], function(
	compose
) {
	return {
		"Name":"compose_InputNotObject_ThrowsErrorInputNotObject",
		"Input": {
			"Options": "Test",
			"Object": {
				"Header": undefined,
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
		"ExpectedOutput": { message: "Error: The input is not of type object." },
		"Debug": false
	};
});
