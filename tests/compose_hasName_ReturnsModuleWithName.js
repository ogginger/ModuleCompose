//compose_hasName_ReturnsModuleWithName.js: Testing logic.

define([
	"compose"
], function(
	compose
) {
	return {
		"Name":"compose_hasName_ReturnsModuleWithName",
		"Input": {
			"Headers": undefined,
			"Name": "test",
			"Dependencies": undefined,
			"Exports": undefined,
			"Content": "{}"
		},
		"Function": function( Input ) {
			return compose.call( Input );
		},
		"ExpectedOutput": 'define("test", {});',
		"Debug": false
	};
});
