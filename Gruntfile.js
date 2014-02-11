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
                options: {
                    style: 'compressed'
                },
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

    //grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
}