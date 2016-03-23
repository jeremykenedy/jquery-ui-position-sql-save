/*
 |--------------------------------------------------------------------------
 | GULP JS provides a clean, fluent API for defining some basic Gulp tasks
 | for your application. By default, we are compiling the Sass and JS
 | file for our application, as well as publishing vendor resources.
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
 |	 |	 1. Commands 		- Quick List of GULP Commands
 |	 |	 2. Loads 			- Preprocessors load calls
 |	 |	 3. Controllers 	- Choose what ot compile
 |	 |	 4. Assets 			- File asset management
 |	 |	 5. APP CSS & JS 	- Process Assets
 |--------------------------------------------------------------------------
 |--------------------------------------------------------------------------
 |   ##                  ######   #######  ##     ## ##     ##    ###    ##    ## ########   ######
 | ####                 ##    ## ##     ## ###   ### ###   ###   ## ##   ###   ## ##     ## ##    ##
 |   ##                 ##       ##     ## #### #### #### ####  ##   ##  ####  ## ##     ## ##
 |   ##      #######    ##       ##     ## ## ### ## ## ### ## ##     ## ## ## ## ##     ##  ######
 |   ##                 ##       ##     ## ##     ## ##     ## ######### ##  #### ##     ##       ##
 |   ##                 ##    ## ##     ## ##     ## ##     ## ##     ## ##   ### ##     ## ##    ##
 | ######                ######   #######  ##     ## ##     ## ##     ## ##    ## ########   ######
 |--------------------------------------------------------------------------
 | Terminal/Bash Commands
 |--------------------------------------------------------------------------
 | sudo gulp copyfile 		<= 	Runs Gulp to copy assets
 | sudo gulp 				<= 	Runs Gulp to compile assets
 |--------------------------------------------------------------------------
 |--------------------------------------------------------------------------
 |  #######                ##        #######     ###    ########   ######
 | ##     ##               ##       ##     ##   ## ##   ##     ## ##    ##
 |        ##               ##       ##     ##  ##   ##  ##     ## ##
 |  #######     #######    ##       ##     ## ##     ## ##     ##  ######
 | ##                      ##       ##     ## ######### ##     ##       ##
 | ##                      ##       ##     ## ##     ## ##     ## ##    ##
 | #########               ########  #######  ##     ## ########   ######
 |--------------------------------------------------------------------------
 |--------------------------------------------------------------------------
 | Loads - Core GULP and Plugin Preprocessors loads
 |--------------------------------------------------------------------------
 */
	var gulp = require('gulp'),
	    del = require('del'),
		sass = require('gulp-sass'),
	    less = require('gulp-less'),
	    cache = require('gulp-cache'),
	    nano = require('gulp-cssnano'),
	    jshint = require('gulp-jshint'),
	    uglify = require('gulp-uglify'),
	    rename = require('gulp-rename'),
	    concat = require('gulp-concat'),
	    notify = require('gulp-notify'),
	    imagemin = require('gulp-imagemin'),
		minifyCSS = require('gulp-clean-css'),
	    concatCss = require('gulp-concat-css'),
	    livereload = require('gulp-livereload'),
		minifyHTML = require('gulp-minify-html'),
	    lessToScss = require('gulp-less-to-scss'),
	    autoprefixer = require('gulp-autoprefixer');
/*
 |--------------------------------------------------------------------------
 |  #######                 ######   #######  ##    ## ######## ########   #######  ##       ##       ######## ########
 | ##     ##               ##    ## ##     ## ###   ##    ##    ##     ## ##     ## ##       ##       ##       ##     ##
 |        ##               ##       ##     ## ####  ##    ##    ##     ## ##     ## ##       ##       ##       ##     ##
 |  #######     #######    ##       ##     ## ## ## ##    ##    ########  ##     ## ##       ##       ######   ########
 |        ##               ##       ##     ## ##  ####    ##    ##   ##   ##     ## ##       ##       ##       ##   ##
 | ##     ##               ##    ## ##     ## ##   ###    ##    ##    ##  ##     ## ##       ##       ##       ##    ##
 |  #######                 ######   #######  ##    ##    ##    ##     ##  #######  ######## ######## ######## ##     ##
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

/*
 |--------------------------------------------------------------------------
 | ##                         ###     ######   ######  ######## ########  ######
 | ##    ##                  ## ##   ##    ## ##    ## ##          ##    ##    ##
 | ##    ##                 ##   ##  ##       ##       ##          ##    ##
 | ##    ##     #######    ##     ##  ######   ######  ######      ##     ######
 | #########               #########       ##       ## ##          ##          ##
 |       ##                ##     ## ##    ## ##    ## ##          ##    ##    ##
 |       ##                ##     ##  ######   ######  ########    ##     ######
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
	 | Copy jQuery Library
	 |--------------------------------------------------------------------------
	 */

	gulp.src("vendor/bower_dl/jquery/dist/jquery.min.js")
		.pipe(gulp.dest("js/"));

	/*
	 |--------------------------------------------------------------------------
	 | Copy jQuery UI Library
	 |--------------------------------------------------------------------------
	 */

	gulp.src("vendor/bower_dl/jquery-ui/jquery-ui.min.js")
		.pipe(gulp.dest("js/"));

	/*
	 |--------------------------------------------------------------------------
	 | Copy jQuery UI Image Assets
	 |--------------------------------------------------------------------------
	 */

	gulp.src("vendor/bower_dl/jquery-ui/themes/base/images/**")
		.pipe(gulp.dest("images/"));

	/*
	 |--------------------------------------------------------------------------
	 | Copy jQuery JSON Library
	 |--------------------------------------------------------------------------
	 */

	gulp.src("vendor/bower_dl/jquery-json/dist/jquery.json.min.js")
		.pipe(gulp.dest("js/"));

});

/*
 |--------------------------------------------------------------------------
 | ########                  ###    ########  ########
 | ##                       ## ##   ##     ## ##     ##
 | ##                      ##   ##  ##     ## ##     ##
 | #######     #######    ##     ## ########  ########
 |       ##               ######### ##        ##
 | ##    ##               ##     ## ##        ##
 |  ######                ##     ## ##        ##
 |--------------------------------------------------------------------------
 */

gulp.task('default', function() {

	// PROCESS APP ASSETS
	if (enable_compile_app) {


		// APP SASS/CSS
		if (enable_compile_app_css) {

			// COMPILE SASS/SCSS - APP CSS
		    gulp.src('sass/**/*.scss')
		        .pipe(sass().on('error', sass.logError))
		        .pipe(gulp.dest('sass/build/css/'));

		    // COMBINE CSS
			var cssSources = [
				'build/css/**/*.css',
				'vendor/bower_dl/jquery-ui/themes/base/core.css',
				// 'vendor/bower_dl/jquery-ui/themes/base/accordion.css',
				// 'vendor/bower_dl/jquery-ui/themes/base/autocomplete.css',
				// 'vendor/bower_dl/jquery-ui/themes/base/button.css',
				// 'vendor/bower_dl/jquery-ui/themes/base/datepicker.css',
				// 'vendor/bower_dl/jquery-ui/themes/base/dialog.css',
				'vendor/bower_dl/jquery-ui/themes/base/draggable.css',
				// 'vendor/bower_dl/jquery-ui/themes/base/menu.css',
				// 'vendor/bower_dl/jquery-ui/themes/base/progressbar.css',
				'vendor/bower_dl/jquery-ui/themes/base/resizable.css',
				'vendor/bower_dl/jquery-ui/themes/base/selectable.css',
				'vendor/bower_dl/jquery-ui/themes/base/selectmenu.css',
				// 'vendor/bower_dl/jquery-ui/themes/base/sortable.css',
				// 'vendor/bower_dl/jquery-ui/themes/base/slider.css',
				// 'vendor/bower_dl/jquery-ui/themes/base/spinner.css',
				// 'vendor/bower_dl/jquery-ui/themes/base/tabs.css',
				// 'vendor/bower_dl/jquery-ui/themes/base/tooltip.css',
				// 'vendor/bower_dl/jquery-ui/themes/base/theme.css',
				'sass/build/css/app.css'
			];

			gulp.src(cssSources)
			    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
			    .pipe(concat('style.css'))
			    .pipe(gulp.dest('css'))
			    .pipe(minifyCSS())
			    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
			    .pipe(concat('style.min.css'))
			    .pipe(gulp.dest('css'))

		}

		// APP JS
		if (enable_compile_app_js) {

			var jsSources = [
				'js/jquery.min.js',
				'js/jquery-ui.min.js',
				'js/jquery.json.min.js',
				'js/app.js'
			];

			gulp.src(jsSources)
			    .pipe(concat('js-combined.min.js'))
			    .pipe(uglify())
			    .pipe(gulp.dest('js'));

		}
	}

});








