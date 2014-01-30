module.exports = function(grunt) {

    grunt.initConfig({
        autoprefixer: {
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

        cssmin: {
            minify: {
                src: 'css/main.css',
                dest: 'css/main.css'
            }
        },

        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass', 'autoprefixer', 'cssmin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['watch']);
}