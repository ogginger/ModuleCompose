//composeValidation.js: Functional Logic.

define([], function() {
  return [
    function( Input ) {
      if (
        JSON.stringify( Object.keys( Input ) ) !=
        JSON.stringify( ["Headers", "Name", "Dependencies", "Exports", "Content" ] )
      ) {
        throw { message: "Error: The state of the module was invalid." };
      } else if ( typeof Input.Content != "string" ) {
        throw { message: "Error: The state content is not valid." };
      } else if (
        Input.Name &&
        typeof Input.Name != "string"
      ) {
        throw { message: "Error: The state name is not of type string." };
      } else if (
        Input.Dependencies &&
        Array.isArray( Input.Dependencies ) == false
      ) {
        throw { message: "Error: The state dependencies is not of type array." };
      } else if (
        Input.Exports &&
        Array.isArray( Input.Exports ) == false
      ) {
        throw { message: "Error: The state exports is not of type array." };
      } else if (
        Input.Exports &&
        Input.Content.match(/^function\([\s\S]*\)\s*{[\s\S]*}$/i) == null
      ) {
        throw { message: "Error: State has exports but content is not of type function." };
      } else {
        return true;
      }
    }
  ];
});
