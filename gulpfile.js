// Load gulp
var gulp = require('gulp');

// Load gulp plugins
var uglify  = require('gulp-uglify');
var concat  = require('gulp-concat');

// JS uglify
gulp.task('uglification', function() {
	return gulp.src('./src/js/*.js')
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./build'))
});

gulp.task('default', ['uglification']);

