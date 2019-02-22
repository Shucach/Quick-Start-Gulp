const gulp = require('gulp');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');


/**
 * Scripts
 */
gulp.task('scripts', function() {
    return gulp.src([
        'app/js/main.js'
    ])
    .pipe(babel())
    .pipe(webpack({
        // 'development' or 'production'
        mode: 'development',
        devtool: 'source-map',
        output: {
            filename: '[name].js',
        }
    }))
    .pipe(gulp.dest('js/'));
});