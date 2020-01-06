//compose_DependenciesNotArray_ThrowsErrorDependenciesNotArray.js: Testing logic.

define([
	"compose"
], function(
	compose
) {
	return {
		"Name":"compose_DependenciesNotArray_ThrowsErrorDependenciesNotArray",
		"Input": {
			"Headers": undefined,
			"Name": undefined,
			"Dependencies": '["dep"]',
			"Exports": undefined,
			"Content": "function() {}"
		},
		"Function": function( Input ) {
			return compose.call( Input );
		},
		"ExceptionTest": true,
		"ExpectedOutput": { message: "Error: The state dependencies is not of type array." },
		"Debug": true
	};
});
