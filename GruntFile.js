/*!
 * dyCountryJS
 *
 * Author: Yusuf Shakeel
 * https://github.com/yusufshakeel
 *
 * GitHub Link: https://github.com/yusufshakeel/dyCountryJS
 *
 * MIT license
 * Copyright (c) 2018 Yusuf Shakeel
 *
 * Date: 2016-04-05 Tuesday
 */

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        babel: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    "temp/js/dyCountry.js": "src/js/dyCountry.js"
                }
            }
        },

        uglify: {
            distVersion: {
                options: {
                    banner: "/*! dyCountryJS v<%= pkg.version %> | https://github.com/yusufshakeel/dyCountryJS | MIT License | Copyright (c) 2018 Yusuf Shakeel | Date: 2016-04-05 Tuesday | Build: <%= grunt.template.today(\"yyyy-mm-dd HH:MM:ss\") %> */",
                    mangle: true
                },
                files: {
                    'dist/js/dyCountry.min.js': [
                        'temp/js/dyCountry.js'
                    ]
                }
            }
        }
    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['babel', 'uglify']);

};