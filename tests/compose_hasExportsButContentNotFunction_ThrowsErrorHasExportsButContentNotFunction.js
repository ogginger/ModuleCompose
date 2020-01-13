//compose_hasExportsButContentNotFunction_ThrowsErrorHasExportsButContentNotFunction.js: Testing logic.

define([
	"compose"
], function(
	compose
) {
	return {
		"Name":"compose_hasExportsButContentNotFunction_ThrowsErrorHasExportsButContentNotFunction",
		"Input": {
			"Header": undefined,
			"Name": undefined,
			"Dependencies": ["dep"],
			"Exports": ["dep"],
			"Content": "{}"
		},
		"Function": function(Input) {
			return compose.call(Input);
		},
		"ExceptionTest": true,
		"ExpectedOutput": { message: "Error: State has exports but content is not of type function." },
		"Debug": false
	};
});
