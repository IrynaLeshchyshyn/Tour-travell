module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'src/sass',
        src: ['*.scss'],
        dest: 'public/css',
        ext: '.css'
      }]
    }
  },

    concat:{
      dist:{
        src:['src/js/script.js','src/js/vendor/bootstrapValidator.min.js', 'src/js/vendor/jquery.tinycircleslider.js', 'src/js/vendor/jquery.ellipsis.min.js', 'src/js/vendor/slick.min.js', 'src/js/vendor/rem.min.js','src/js/vendor/nav.jquery.min.js','src/js/vendor/wow.min.js'],
        dest:'public/js/mainscript.js'
      }
    },

    watch: {
      sass: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['**/*.scss'],
        tasks: ['concat','sass'],
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default',['sass'],['watch'],['concat']);

};
