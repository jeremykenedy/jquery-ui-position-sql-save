/*
 If this style of commenting is frowned upon please let me know. Thanks.
 |--------------------------------------------------------------------------
 | Elixir Through Gulp Asset Management
 |--------------------------------------------------------------------------
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your application. By default, we are compiling the Sass and JS
 | file for our application, as well as publishing vendor resources.
 |--------------------------------------------------------------------------
 |  ######   #######  ##     ## ##     ##    ###    ##    ## ########   ######
 | ##    ## ##     ## ###   ### ###   ###   ## ##   ###   ## ##     ## ##    ##
 | ##       ##     ## #### #### #### ####  ##   ##  ####  ## ##     ## ##
 | ##       ##     ## ## ### ## ## ### ## ##     ## ## ## ## ##     ##  ######
 | ##       ##     ## ##     ## ##     ## ######### ##  #### ##     ##       ##
 | ##    ## ##     ## ##     ## ##     ## ##     ## ##   ### ##     ## ##    ##
 |  ######   #######  ##     ## ##     ## ##     ## ##    ## ########   ######
 |--------------------------------------------------------------------------
 | Terminal/Bash Commands
 |--------------------------------------------------------------------------
 | sudo gulp copyfile 		<= 	Runs Gulp to copy assets
 | sudo gulp 				<= 	Runs Gulp to compile assets
 |--------------------------------------------------------------------------
 |--------------------------------------------------------------------------
 | ########    ###    ########  ##       ########     #######  ########     ######   #######  ##    ## ######## ######## ##    ## ########  ######
 |    ##      ## ##   ##     ## ##       ##          ##     ## ##          ##    ## ##     ## ###   ##    ##    ##       ###   ##    ##    ##    ##
 |    ##     ##   ##  ##     ## ##       ##          ##     ## ##          ##       ##     ## ####  ##    ##    ##       ####  ##    ##    ##
 |    ##    ##     ## ########  ##       ######      ##     ## ######      ##       ##     ## ## ## ##    ##    ######   ## ## ##    ##     ######
 |    ##    ######### ##     ## ##       ##          ##     ## ##          ##       ##     ## ##  ####    ##    ##       ##  ####    ##          ##
 |    ##    ##     ## ##     ## ##       ##          ##     ## ##          ##    ## ##     ## ##   ###    ##    ##       ##   ###    ##    ##    ##
 |    ##    ##     ## ########  ######## ########     #######  ##           ######   #######  ##    ##    ##    ######## ##    ##    ##     ######
 |--------------------------------------------------------------------------
 | TABLE OF CONTENTS
 |--------------------------------------------------------------------------
 |	 |	 1. Loads - Core and Plugin Preprocessors load calls
 |	 |	 2. Controllers - Choose your options
 |	 |	 3. Assets - Get and move preprocessor assets
 |	 |	 4. APP CSS & JS - APP CSS & JS Preproccessors
 |	 |	 5. PHPUnit Testing - PHPUNIT Load Testing
 |--------------------------------------------------------------------------
 |--------------------------------------------------------------------------
 |   ##                 ##        #######     ###    ########   ######
 | ####                 ##       ##     ##   ## ##   ##     ## ##    ##
 |   ##                 ##       ##     ##  ##   ##  ##     ## ##
 |   ##      #######    ##       ##     ## ##     ## ##     ##  ######
 |   ##                 ##       ##     ## ######### ##     ##       ##
 |   ##                 ##       ##     ## ##     ## ##     ## ##    ##
 | ######               ########  #######  ##     ## ########   ######
 |--------------------------------------------------------------------------
 |--------------------------------------------------------------------------
 | Loads - Core and Plugin Preprocessors load calls
 |--------------------------------------------------------------------------
 */
	var gulp = require('gulp'),
		elixir = require('laravel-elixir'),
	    sass = require('gulp-ruby-sass'),
	    autoprefixer = require('gulp-autoprefixer'),
	    nano = require('gulp-cssnano'),
	    jshint = require('gulp-jshint'),
	    uglify = require('gulp-uglify'),
	    imagemin = require('gulp-imagemin'),
	    rename = require('gulp-rename'),
	    concat = require('gulp-concat'),
	    notify = require('gulp-notify'),
	    cache = require('gulp-cache'),
	    livereload = require('gulp-livereload'),
	    del = require('del'),
	    less = require('gulp-less'),
	    lessToScss = require('gulp-less-to-scss');
/*
 |--------------------------------------------------------------------------
 |  #######                 ######   #######  ##    ## ######## ########   #######  ##       ##       ######## ########
 | ##     ##               ##    ## ##     ## ###   ##    ##    ##     ## ##     ## ##       ##       ##       ##     ##
 |        ##               ##       ##     ## ####  ##    ##    ##     ## ##     ## ##       ##       ##       ##     ##
 |  #######     #######    ##       ##     ## ## ## ##    ##    ########  ##     ## ##       ##       ######   ########
 | ##                      ##       ##     ## ##  ####    ##    ##   ##   ##     ## ##       ##       ##       ##   ##
 | ##                      ##    ## ##     ## ##   ###    ##    ##    ##  ##     ## ##       ##       ##       ##    ##
 | #########                ######   #######  ##    ##    ##    ##     ##  #######  ######## ######## ######## ##     ##
 |--------------------------------------------------------------------------
 |--------------------------------------------------------------------------
 | ASSET MANAGEMENT CONTROLLER - Choose which assets to compile when running gulp
 |--------------------------------------------------------------------------
 | 1 = ON
 | 2 = OFF
 |--------------------------------------------------------------------------
 */

	/* APP __-------------------------------------------------------------------*/
	var enable_compile_app			= 1;			// Compile App Assets?
	var enable_compile_app_css		= 1;			// Compile App SCSS & CSS?
	var enable_compile_app_js		= 1;			// Compile App JS?

	/* PHPUNIT -----------------------------------------------------------------*/
	var enable_unit_testing 		= 0;			// Compile phpUnit Testing?

/*
 |--------------------------------------------------------------------------
 |  #######                   ###     ######   ######  ######## ########  ######
 | ##     ##                 ## ##   ##    ## ##    ## ##          ##    ##    ##
 |        ##                ##   ##  ##       ##       ##          ##    ##
 |  #######     #######    ##     ##  ######   ######  ######      ##     ######
 |        ##               #########       ##       ## ##          ##          ##
 | ##     ##               ##     ## ##    ## ##    ## ##          ##    ##    ##
 |  #######                ##     ##  ######   ######  ########    ##     ######
 |--------------------------------------------------------------------------
 | Gulp Asset Management - Create Gulp function copyfiles
 |--------------------------------------------------------------------------
 | Copy any needed files.
 | Do a 'gulp copyfiles' after bower updates
 |--------------------------------------------------------------------------
 */
gulp.task("copyfiles", function() {

	/*
	 |--------------------------------------------------------------------------
	 | Copy Bootstrap and FontAwesome
	 |--------------------------------------------------------------------------
	 */
	gulp.src("vendor/bower_dl/bootstrap/**")
		.pipe(gulp.dest("resources/assets/bootstrap/"));

	gulp.src("vendor/bower_dl/bootstrap/dist/fonts/**")
		.pipe(gulp.dest("public/assets/fonts"));

	gulp.src("vendor/bower_dl/bootstrap/dist/fonts/**")
		.pipe(gulp.dest("public/assets/css/fonts"));

	gulp.src("vendor/bower_dl/fontawesome/**")
		.pipe(gulp.dest("resources/assets/fontawesome/"));

	gulp.src("vendor/bower_dl/fontawesome/fonts/**")
		.pipe(gulp.dest("public/assets/css/fonts"));

	gulp.src("vendor/bower_dl/ionicons/**")
		.pipe(gulp.dest("resources/assets/ionicons/"));

	gulp.src("vendor/bower_dl/ionicons/fonts/**")
		.pipe(gulp.dest("public/assets/css/fonts"));

	/*
	 |--------------------------------------------------------------------------
	 | Copy jQuery and jQuery UI JS Assets
	 |--------------------------------------------------------------------------
	 */
	gulp.src("vendor/bower_dl/jquery/dist/jquery.js")
		.pipe(gulp.dest("resources/assets/js/"));

	gulp.src("vendor/bower_dl/jquery-ui/jquery-ui.js")
		.pipe(gulp.dest("resources/assets/js/"));

});

/*
 |--------------------------------------------------------------------------
 | Default gulp is to run this elixir laravel function - builds on gulp
 |--------------------------------------------------------------------------
 */
elixir(function(mix) {

	/*
	 |--------------------------------------------------------------------------
	 | ##                         ###    ########  ########
	 | ##    ##                  ## ##   ##     ## ##     ##
	 | ##    ##                 ##   ##  ##     ## ##     ##
	 | ##    ##     #######    ##     ## ########  ########
	 | #########               ######### ##        ##
	 |       ##                ##     ## ##        ##
	 |       ##                ##     ## ##        ##
	 |--------------------------------------------------------------------------
	 */
	// PROCESS APP ASSETS
	if (enable_compile_app) {

		// COMPILE BOOTSTRAP LESS
		mix.less('vender/bower_dl/bootstrap/less/bootstrap.less', '/css/vendor/bootstrap.css');

		// COMIPILE APP SASS/SCSS - APP CSS
		if (enable_compile_app_css) {
			mix.sass('sass/app.scss', 'public/assets/css/app.css');
		}

		// COMBINE CSS INTO SINGLE FILE
	    mix.styles([

			'/css/vendor/bootstrap.css',					// COMPILED BOOTSTRAP FILE
			'/css/app.css',

	    ],
	    'public/assets/css/admin/style.css', './');													// SINGLE FILE OUTPUT

		//COMBINE APP SCRIPTS - APP JS
		if (enable_compile_app_js) {
		    mix.scripts([
					'js/jquery.js',
					'js/bootstrap.js',
					'js/app.js',
			    ],
			    'public/assets/js/app.js',
			    'resources/assets'
		   	);
		}
	}

	/*
	 |--------------------------------------------------------------------------
     | ########               ######## ########  ######  ######## #### ##    ##  ######
     | ##                        ##    ##       ##    ##    ##     ##  ###   ## ##    ##
     | ##                        ##    ##       ##          ##     ##  ####  ## ##
     | #######     #######       ##    ######    ######     ##     ##  ## ## ## ##   ####
     |       ##                  ##    ##             ##    ##     ##  ##  #### ##    ##
     | ##    ##                  ##    ##       ##    ##    ##     ##  ##   ### ##    ##
     |  ######                   ##    ########  ######     ##    #### ##    ##  ######
	 |--------------------------------------------------------------------------
	 */
	// START phpUnit FOR UNIT TESTING
	if (enable_unit_testing) {
		mix.phpUnit();
	}

});

