//compose_hasAll_ReturnsModuleWithAll.js: Testing logic.

define([
	"compose"
], function(
	compose
) {
	return {
		"Name":"compose_hasAll_ReturnsModuleWithAll",
		"Input": {
			"Header": "This is a header.\n",
			"Name": "name",
			"Dependencies": [ "dep", "dep2" ],
			"Exports": [ "dep", "dep2" ],
			"Content": "function() {}"
		},
		"Function": function( Input ) {
			return compose.call( Input );
		},
		"ExpectedOutput": 'This is a header.\ndefine("name", ["dep","dep2"], function(dep,dep2) {});',
		"Debug": false
	};
});
