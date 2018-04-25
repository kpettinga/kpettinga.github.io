var addsrc 		 = require('gulp-add-src'),
	autoprefixer = require('gulp-autoprefixer'),
	cleancss 	 = require('gulp-clean-css'),
	combineMq	 = require('gulp-combine-mq'),
	concat 		 = require('gulp-concat-util'),
	gulp 		 = require('gulp'),
	jshint 		 = require('gulp-jshint'),
	rename 		 = require('gulp-rename'),
	sass 		 = require('gulp-ruby-sass'),
    server       = require('gulp-server-livereload'),
	sourcemaps 	 = require('gulp-sourcemaps'),
    uglify 		 = require('gulp-uglify');

gulp.task('styles', function() {
	return sass(['assets/css/src/style.scss'], { style: 'expanded', sourcemap: true })
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('assets/css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(combineMq({
			beautify: false
		}))
		.pipe(cleancss())
		.pipe(gulp.dest('assets/css'));
        // .pipe(livereload());
});

gulp.task('scripts', function() {
    return gulp.src(['assets/scripts/src/**/*.js'])
          .pipe(jshint())
          .pipe(jshint.reporter('default'))
          .pipe(addsrc.prepend(['assets/js/vendor/*.js']))
          .pipe(sourcemaps.init())
          .pipe(concat('main.js'))
          .pipe(sourcemaps.write())
          .pipe(gulp.dest('assets/scripts'))
          .pipe(rename({suffix: '.min'}))
          .pipe(uglify())
          .pipe(gulp.dest('assets/scripts'));
        //   .pipe(livereload());
});

gulp.task('default', [], function() {
	gulp.start('styles', 'scripts', 'webserver');
});

gulp.task('watch', function() {
    
    // Watch .scss files
	gulp.watch('assets/css/**/*.scss', ['styles']);
	
    // Watch .js files
    gulp.watch('assets/scripts/src/**/*.js', ['scripts']);
    
});

gulp.task('webserver', ['watch'], function() {
    gulp.src('./')
        .pipe(server({
            livereload: {
                enable: true,
                filter: function (filename, cb) {
                    cb(/index.html|style.css|scripts\/main.js/.test(filename));
                }
            },
            open: true
        }));
});