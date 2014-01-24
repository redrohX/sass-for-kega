module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        autoprefixer: {
            // prefix the specified file
            single_file: {
                src: 'css/main.css',
                dest: 'css/main.css'
            }
        },

        sass: {
            dist: {
                files: {
                    'css/main.css' : 'sass/main.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass', 'autoprefixer']
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['watch']);

}