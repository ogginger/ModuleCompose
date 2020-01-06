//compose_InvalidContent_ThrowsErrorInvalidContent.js: Testing logic.

define([
	"compose"
], function(
	compose
) {
	return {
		"Name":"compose_InvalidContent_ThrowsErrorInvalidContent",
		"Input": {
			"Headers": undefined,
			"Name": undefined,
			"Dependencies": undefined,
			"Exports": undefined,
			"Content": undefined
		},
		"Function": function( Input ) {
			return compose.call( Input );
		},
		"ExceptionTest": true,
		"ExpectedOutput": { message: "Error: The state content is not valid." },
		"Debug": true
	};
});
