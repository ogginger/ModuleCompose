//compose_State_ReturnsModule.js: Testing logic.

define([
	"compose"
], function(
	compose
) {
	return {
		"Name":"compose_State_ReturnsModule",
		"Input": {
			"Headers": undefined,
			"Name": undefined,
			"Dependencies": undefined,
			"Exports": undefined,
			"Content": "{}"
		},
		"Function": function( Input ) {
			return compose.call( Input );
		},
		"ExpectedOutput": "define({});",
		"Debug": true
	};
});
