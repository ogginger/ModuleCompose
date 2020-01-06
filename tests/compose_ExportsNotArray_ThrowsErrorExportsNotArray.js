//compose_ExportsNotArray_ThrowsErrorExportsNotArray.js: Testing logic.

define([
	"compose"
], function(
	compose
) {
	return {
		"Name":"compose_ExportsNotArray_ThrowsErrorExportsNotArray",
		"Input": {
			"Headers": undefined,
			"Name": undefined,
			"Dependencies": ["dep"],
			"Exports": '["dep"]',
			"Content": "function( dep ) {}"
		},
		"Function": function( Input ) {
			return compose.call( Input );
		},
		"ExceptionTest": true,
		"ExpectedOutput": { message: "Error: The state exports is not of type array." },
		"Debug": false
	};
});
