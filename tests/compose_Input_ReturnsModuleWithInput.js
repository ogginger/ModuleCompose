//compose_Input_ReturnsModuleWithInput.js: Testing logic.

define([
	"compose"
], function(
	compose
) {
	return {
		"Name":"compose_Input_ReturnsModuleWithInput",
		"Input": {
			"Options": {
				"Header": "//This is a header.\n",
				"Name": "test",
				"Dependencies": [ "dep" ],
				"Exports": ["dep"]
			},
			"Object": {
				"Header": undefined,
				"Name": undefined,
				"Dependencies": undefined,
				"Exports": undefined,
				"Content": "function() {}"
			}
		},
		"Function": function( Input ) {
			return compose.call( Input.Object, Input.Options );
		},
		"ExpectedOutput": '//This is a header.\ndefine("test", ["dep"], function(dep) {});'
	};
});
