//compose_hasExports_ReturnsModuleWithExports.js: Testing logic.

define([
	"compose"
], function(
	compose
) {
	return {
		"Name":"compose_hasExports_ReturnsModuleWithExports",
		"Input": {
			"Headers": undefined,
			"Name": undefined,
			"Dependencies": ["dep"],
			"Exports": ["dep"],
			"Content": "function() {}"
		},
		"Function": function( Input ) {
			return compose.call( Input );
		},
		"ExpectedOutput": 'define(["dep"], function(dep) {});',
		"Debug": true
	};
});
