//compose_hasDependencies_ReturnsModuleWithDependencies.js: Testing logic.

define([
	"compose"
], function(
	compose
) {
	return {
		"Name":"compose_hasDependencies_ReturnsModuleWithDependencies",
		"Input": {
			"Headers": undefined,
			"Name": undefined,
			"Dependencies": [ "dep" ],
			"Exports": undefined,
			"Content": "function() {}"
		},
		"Function": function( Input ) {
			return compose.call( Input );
		},
		"ExpectedOutput": 'define(["dep"], function() {});',
		"Debug": true
	};
});