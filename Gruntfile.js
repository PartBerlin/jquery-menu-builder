module.exports = function( grunt ) {
    "use strict";
    var key;

    grunt.initConfig( {
        pkg: grunt.file.readJSON( "package.json" ),
        qunit: {
            options: {
                timeout: 3000,
                "--web-security": "no"
            },
            all: "test/index.html"
        },
        jshint: {
            options: {
                jshintrc: true
            },
            grunt: "Gruntfile.js",
            src: "src/**/*.js",
            tests: "test/**/*.js"
        },
        jscs: {
            src: "src/*.js",
            gruntfile: "Gruntfile.js",
            tests: "test/*.js",
            options: {
                config: ".jscsrc"
            }
        },
        jsonlint: {
            pkg: {
                src: [
                    "package.json"
                ]
            }
        },
        uglify: {
            options: {
                banner: "/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.license %> */\n"
            },
            build: {
                src: "src/menu-builder.js",
                dest: "dist/menu-builder.min.js"
            }
        },
        connect: {
            server: {
                options: {
                    base: "",
                    port: 9999
                }
            }
        },
        watch: {}
    } );

    for ( key in grunt.file.readJSON( "package.json" ).devDependencies ) {
        if ( key !== "grunt" && key.indexOf( "grunt" ) === 0 ) {
            grunt.loadNpmTasks( key );
        }
    }

    grunt.registerTask( "default", [ "test", "uglify" ] );
    grunt.registerTask( "dev", [ "connect", "watch" ] );
    grunt.registerTask( "test", [ "jshint", "jscs", "jsonlint", "qunit" ] );
};
