let gulp = require('gulp');
let babel = require('gulp-babel');


/**
 * Scripts
 */
gulp.task('scripts', function() {
    return gulp.src([
        'app/js/main.js'
    ])
    .pipe(babel())
    .pipe(gulp.dest('js'));
});