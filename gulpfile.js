// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var stylus = require('gulp-stylus');
var autoprefix = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('app/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our stylus and concatenate
gulp.task('styl', function() {
    return gulp.src('app/css/*.styl')
        .pipe(concat('main.css'))
        .pipe(stylus())
        .pipe(cleanCSS())
        .pipe(autoprefix('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('app/js/*.js')
        .pipe(concat('main.js'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('app/js/*.js', ['scripts']);
    gulp.watch('app/css/*.styl', ['styl']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);