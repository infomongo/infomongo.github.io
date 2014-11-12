module.exports = function(grunt) {
    grunt.initConfig({
 
     	less: {
     		development: {
     			options: {
	     			
     			},
     			files: {"css/styles.css": "css/styles.less"}
     		}
     	},
     	watch: {
	      styles: {
			files: ['css/*.less'], // which files to watch
			tasks: ['less'],
			options: {
			  nospawn: true
			}
	      }
     	}
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('default', ['less']);
};