/* global require.js config */
requirejs.config({
    baseUrl: "js/lib",
    paths: {
        engage: "../engage",
        plugins: "/engage/plugin/*/static"
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"],
            exports: "Bootstrap"
        },
        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        "underscore": {
            exports: "_"
        },
        "mousetrap": {
            exports: "Mousetrap"
        },
        "moment": {
            exports: "Moment"
        },
        "basil": {
            exports: "Basil"
        },
        "bowser": {
            exports: "Bowser"
        },
        "bootbox": {
            exports: "Bootbox"
        }
    }
});
var PLUGIN_PATH = "/engage/theodul/plugin/";
// start core logic
require(["engage/core"]);
