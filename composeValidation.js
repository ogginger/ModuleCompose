//composeValidation.js: Functional Logic.

define([
  "underscore"
], function(
  _
) {
  return [
    function( Input ) {
      if ( Input.Options &&
        typeof Input.Options != "object"  
      ) {
        throw { message: "Error: The input is not of type object." };
      } else if ( Input.Options &&
        JSON.stringify( 
          _.difference(Object.keys( Input.Options ), [
            "Header", 
            "Name", 
            "Dependencies", 
            "Exports", 
            "Content" 
          ])) !=
        JSON.stringify([])
      ) {
        throw { message: "Error: The input is invalid." };
      } else {
        return true;
      }
    },
    function( Input ) {
      if (
        JSON.stringify( 
          _.difference([
            "Header", 
            "Name", 
            "Dependencies", 
            "Exports", 
            "Content" 
          ],  Object.keys( Input.Object ))) !=
        JSON.stringify([])
      ) {
        throw { message: "Error: The state of the module was invalid." };
      } else if ( typeof Input.Object.Content != "string" ) {
        throw { message: "Error: The state content is not valid." };
      } else if (
        Input.Object.Name &&
        typeof Input.Object.Name != "string"
      ) {
        throw { message: "Error: The state name is not of type string." };
      } else if (
        Input.Object.Dependencies &&
        Array.isArray( Input.Object.Dependencies ) == false
      ) {
        throw { message: "Error: The state dependencies is not of type array." };
      } else if (
        Input.Object.Exports &&
        Array.isArray( Input.Object.Exports ) == false
      ) {
        throw { message: "Error: The state exports is not of type array." };
      } else if (
        Input.Object.Exports &&
        Input.Object.Content.match(/^function\([\s\S]*\)\s*{[\s\S]*}$/i) == null
      ) {
        throw { message: "Error: State has exports but content is not of type function." };
      } else {
        return true;
      }
    }
  ];
});
