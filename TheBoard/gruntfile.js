// gruntfile.js
module.exports = function (grunt) {
    grunt.initConfig({
        // setup the plugin called nodemon
        nodemon: {
            all: {
                script: 'server.js',
                options: {
                    watchedExtensions: ['js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-nodemon'); // tell it to load the extension
    grunt.registerTask('default', ['nodemon']); // the default grunt behaviour is to run 'nodemon'

};