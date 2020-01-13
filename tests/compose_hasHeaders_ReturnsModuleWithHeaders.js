//compose_hasHeader_ReturnsModuleWithHeader.js: Testing logic.

define([
	"compose"
], function(
	compose
) {
	return {
		"Name":"compose_hasHeader_ReturnsModuleWithHeader",
		"Input": {
			"Header": "This is a header.\n",
			"Name": undefined,
			"Dependencies": undefined,
			"Exports": undefined,
			"Content": "{}"
		},
		"Function": function( Input ) {
			return compose.call( Input );
		},
		"ExpectedOutput": "This is a header.\ndefine({});",
		"Debug": false
	};
});
