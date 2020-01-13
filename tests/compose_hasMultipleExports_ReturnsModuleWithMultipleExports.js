//compose_hasMultipleExports_ReturnsModuleWithMultipleExports.js: Testing logic.

define([
	"compose"
], function(
	compose
) {
	return {
		"Name":"compose_hasMultipleExports_ReturnsModuleWithMultipleExports",
		"Input": {
			"Header": undefined,
			"Name": undefined,
			"Dependencies": ["dep", "dep2" ],
			"Exports": ["dep", "dep2" ],
			"Content": "function() {}"
		},
		"Function": function( Input ) {
			return compose.call( Input );
		},
		"ExpectedOutput": 'define(["dep","dep2"], function(dep,dep2) {});',
		"Debug": false
	};
});
