//test_compose.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "compose",
  "tests/compose_onlyContent_ReturnsModuleWithContent",
  "tests/compose_InvalidState_ThrowsErrorInvalidState",
  "tests/compose_hasHeaders_ReturnsModuleWithHeaders",
  "tests/compose_hasDependencies_ReturnsModuleWithDependencies",
  "tests/compose_InvalidContent_ThrowsErrorInvalidContent",
  "tests/compose_hasExports_ReturnsModuleWithExports",
  "tests/compose_hasExportsButContentNotFunction_ThrowsErrorHasExportsButContentNotFunction",
  "tests/compose_ExportsNotArray_ThrowsErrorExportsNotArray",
  "tests/compose_DependenciesNotArray_ThrowsErrorDependenciesNotArray",
  "tests/compose_hasMultipleExports_ReturnsModuleWithMultipleExports",
  "tests/compose_hasName_ReturnsModuleWithName",
  "tests/compose_NameNotString_ThrowsErrorNameNotString",
  "tests/compose_hasAll_ReturnsModuleWithAll"
], function(
  TestSuite,
  log,
  compose,
  compose_onlyContent_ReturnsModuleWithContent,
  compose_InvalidState_ThrowsErrorInvalidState,
  compose_hasHeaders_ReturnsModuleWithHeaders,
  compose_hasDependencies_ReturnsModuleWithDependencies,
  compose_InvalidContent_ThrowsErrorInvalidContent,
  compose_hasExports_ReturnsModuleWithExports,
  compose_hasExportsButContentNotFunction_ThrowsErrorHasExportsButContentNotFunction,
  compose_ExportsNotArray_ThrowsErrorExportsNotArray,
  compose_DependenciesNotArray_ThrowsErrorDependenciesNotArray,
  compose_hasMultipleExports_ReturnsModuleWithMultipleExports,
  compose_hasName_ReturnsModuleWithName,
  compose_NameNotString_ThrowsErrorNameNotString,
  compose_hasAll_ReturnsModuleWithAll
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_compose initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "compose" );
        xTestSuite.add( compose_onlyContent_ReturnsModuleWithContent ); 
        xTestSuite.add( compose_InvalidState_ThrowsErrorInvalidState );  
        xTestSuite.add( compose_hasHeaders_ReturnsModuleWithHeaders );  
        xTestSuite.add( compose_hasDependencies_ReturnsModuleWithDependencies );
        xTestSuite.add( compose_InvalidContent_ThrowsErrorInvalidContent );
        xTestSuite.add( compose_hasExports_ReturnsModuleWithExports );  
        xTestSuite.add( compose_hasExportsButContentNotFunction_ThrowsErrorHasExportsButContentNotFunction );  
        xTestSuite.add( compose_ExportsNotArray_ThrowsErrorExportsNotArray );  
        xTestSuite.add( compose_DependenciesNotArray_ThrowsErrorDependenciesNotArray );
        xTestSuite.add( compose_hasMultipleExports_ReturnsModuleWithMultipleExports );
        xTestSuite.add( compose_hasName_ReturnsModuleWithName );
        xTestSuite.add( compose_NameNotString_ThrowsErrorNameNotString );
        xTestSuite.add( compose_hasAll_ReturnsModuleWithAll );
      xTestSuite.test();
    }
  });
});
