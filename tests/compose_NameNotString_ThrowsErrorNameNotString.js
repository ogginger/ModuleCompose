//compose_NameNotString_ThrowsErrorNameNotString.js: Testing logic.

define([
	"compose"
], function(
	compose
) {
	return {
		"Name":"compose_NameNotString_ThrowsErrorNameNotString",
		"Input": {
			"Headers": undefined,
			"Name": [ "test" ],
			"Dependencies": undefined,
			"Exports": undefined,
			"Content": "{}"
		},
		"Function": function( Input ) {
			return compose.call( Input );
		},
		"ExceptionTest": true,
		"ExpectedOutput": { message: "Error: The state name is not of type string." },
		"Debug": false
	};
});
