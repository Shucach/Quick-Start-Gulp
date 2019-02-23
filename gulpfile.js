const gulp = require('gulp');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');

const imagemin = require("gulp-imagemin");
const imageminMozjpeg = require('imagemin-mozjpeg');

const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const stylus = require('gulp-stylus');
const rename = require('gulp-rename');


/**
 * Style
 */
function style() {
    return gulp.src([
        'app/css/reset.styl',
        'app/css/grid.styl',
        'app/css/style.styl'
    ])
        .pipe(concat('main.styl'))
        .pipe(stylus())
        .pipe(cleanCSS())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('css'));
}


/**
 * Scripts
 */
function scripts() {
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
}

/**
 * Optimize Images
 */
function images() {
    return gulp
        .src('app/images/*')
        .pipe(
            imagemin([
                imageminMozjpeg({
                    quality: 50
                })
            ])
        )
        .pipe(gulp.dest("images"));
}

/**
 * Watch
 */
function watchFiles() {
    gulp.watch("app/js/*.js", scripts);
    gulp.watch("app/css/*.styl", style);
}


/**
 * Define complex tasks
 */
const js = gulp.series(scripts);
const css = gulp.series(style);
const watch = gulp.parallel(watchFiles);


/**
 * Export tasks
 */
exports.js = js;
exports.images = images;
exports.css = css;
exports.watch = watch;
