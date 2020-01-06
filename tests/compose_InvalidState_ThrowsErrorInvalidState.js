//compose_InvalidState_ThrowsErrorInvalidState.js: Testing logic.

define([
	"compose"
], function(
	compose
) {
	return {
		"Name":"compose_InvalidState_ThrowsErrorInvalidState",
		"Input": {},
		"Function": function( Input ) {
			return compose.call( Input );
		},
		"ExceptionTest": true,
		"ExpectedOutput": { message: "Error: The state of the module was invalid." },
		"Debug": true
	};
});
