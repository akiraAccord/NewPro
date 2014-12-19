module.exports = function(grunt){
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
		/*编译sass*/
		compass: {                 
			dist: {                   
				options: {             
					sassDir: 'app/styles/sass',
					cssDir: 'app/styles/css',
					environment: 'development'
				}
			}
		},
		/*合并*/
		concat: {
			options: {
				banner: '<%= banner %>' 
			},
			js: {
				src: ['app/js/router/*.js','app/js/services/*.js','app/js/controller/*.js','app/js/directives/*.js'],
				dest: 'app/js/app.js'
			},
		},
		/*压缩*/
		uglify: {
			options:{
				banner: '<%= banner %>'
			},
			dist: {
				files: [{
					src: '<%= concat.js.dest %>',
					dest: 'app/js/app.min.js' 
				}]
			}
		},
		/*检错*/
		jshint: {
			options:{
				lastsemic : true,
				asi : true
			},
			files: ['gruntfile.js', 'app/js/*.js'],
		},
		/*监测*/
		watch: {
			sass: {
				files: ['app/styles/**/*'],
				tasks: ['compass']
			},
			js: {
				files: ['app/js/**/*'],
				tasks: ['concat','jshint']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat','compass','watch']);
};