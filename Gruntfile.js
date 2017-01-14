module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      dev: {
        files : {
          'css/compiled.css': 'css/style.less'
        }
      },
      prod :{
        options :{
          plugins: [
            new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]})
          ]
        },
        files: {
          'css/compiled.css': 'css/style.less'
        }
      }
    },
    cssmin :{
      target: {
        files: {
          'css/compiled.css': ['css/compiled.css']
        }
      }
    },
    watch :{
      less:{
        files: ['css/*.less'],
        tasks: ['less:dev'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less:dev','watch']);
  grunt.registerTask('productionBuild', ['less:prod','cssmin']);

};
