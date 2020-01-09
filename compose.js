//compose.js: Functional Logic.

define([
  "validate",
  "composeValidation"
], function(
  validate,
  composeValidation
) {
  return function( Input ) {
    var State = this;
    var sModule = "";

    validate({
      "Data": {
        "Object": State,
        "Options": Input
      },
      "Validation": composeValidation
    });

    Object.assign( State, Input );

    if ( State.Headers ) {
      sModule = State.Headers;
    }

    sModule += "define(";
    if ( State.Content ) {
      if ( State.Name ) {
        sModule += '"' + State.Name + '", ';
      }

      if ( State.Dependencies ) {
        sModule += JSON.stringify( State.Dependencies ) + ", ";
      }

      if (
        State.Exports &&
        State.Content.match(/^function\([\s\S]*\)\s*{[\s\S]*}$/i)
      ) {
        sModule += "function(";
        State.Exports.forEach(function( _export, index ) {
          sModule += _export;
          if ( 
            State.Exports.length > 1 &&
            index != State.Exports.length - 1
          ) {
            sModule += ","
          }
        });
        sModule += ") " + new RegExp(/^function\([\s\S]*\)\s*({[\s\S]*})$/i).exec( State.Content )[1];
      } else {
        sModule += State.Content;
      }
    }
    sModule +=  ");";

    return sModule;
  };
});
