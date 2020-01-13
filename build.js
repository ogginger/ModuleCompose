//build.js: Configuration file for optimizing the ifSetup function. 
/*
*/ 
({
    paths: {
        "validate": "lib/validate.min",
        "underscore": "lib/underscore.min"
    },
    exclude: [ "underscore" ],
    name: "compose",
    out: "module_compose.min.js"
})
