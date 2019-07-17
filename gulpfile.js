const gulp = require('gulp');
const webpack = require('webpack-stream');

const imagemin = require("gulp-imagemin");
const imageminMozjpeg = require('imagemin-mozjpeg');

const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const stylus = require('gulp-stylus');
const rename = require('gulp-rename');

const browserSync = require("browser-sync").create();
const svgSprite = require('gulp-svg-sprite');

const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');

const webp = require('gulp-webp');


/**
 * Style
 */
function style() {
    return gulp.src([
        'app/css/reset.styl',
        'app/css/grid.styl',
        'app/css/fonts.styl',
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
        .pipe(webpack({
            // 'development' or 'production'
            mode: 'production',
            devtool: 'source-map',
            output: {
                filename: '[name].js',
            },
            module: {
                rules: [
                    {
                        test: /\.(js)$/,
                        loader: 'babel-loader',
                        query: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            }
        }))
        .pipe(gulp.dest('js/'));
}

/**
 * JS|jQuery plugins
 * @returns {*}
 */
function jsPlugins() {
    return gulp.src([
        'app/js/plugins/jquery-3.4.1.min.js',
    ])
        .pipe(webpack({
            // 'development' or 'production'
            mode: 'production',
            output: {
                filename: '[name].js',
            }
        }))
        .pipe(rename('plugins.min.js'))
        .pipe(gulp.dest('js'));
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
 * Convert image to WebP
 */
function imageToWebP() {
    return gulp.src('app/images/to_webp/*')
        .pipe(webp())
        .pipe(gulp.dest('images/webp'))
}

/**
 * Create svg sprite
 */
function createSvgSprite() {
    return gulp.src('app/images/sprite_svg/*.svg')
        .pipe(svgSprite({
                mode: {
                    stack: {
                        sprite: "../sprite.svg"
                    }
                },
            }
        ))
        .pipe(gulp.dest('images'));
}

/**
 * Watch
 */
function watchFiles() {
    gulp.watch("app/js/*.js", scripts);
    gulp.watch("app/css/*.styl", style);
}

/**
 * Browser sync
 */
function browserSyncWatch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    let st = gulp.watch("app/css/*.styl", style),
        js = gulp.watch("app/js/*.js", scripts);

    st.on('change', function(){
        browserSync.reload();
    });
    js.on('change', function(){
        browserSync.reload();
    });

    gulp.watch("./*.html").on('change', browserSync.reload);
}

/**
 * Convert svg icons to fonts
 */
function svg2Fonts() {
    return gulp.src(['app/svg2Fonts/*.svg'])
        .pipe(iconfontCss({
            fontName: 'svgFonts',
            targetPath: '_icons.scss',
            fontPath: 'fonts/svg-fonts/'
        }))
        .pipe(iconfont({
            fontName: 'svgFonts',
            //prependUnicode: true,
            formats: ['ttf', 'eot', 'woff', 'svg', 'woff2'],
        }))
        .pipe(gulp.dest('fonts/svg-fonts/'));
}


/**
 * Define complex tasks
 */
const js = gulp.series(scripts);
const css = gulp.series(style);
const plugins = gulp.series(jsPlugins);
const svg_sprite = gulp.series(createSvgSprite);
const webP = gulp.series(imageToWebP);
const watch = gulp.parallel(watchFiles);
const serve = gulp.parallel(browserSyncWatch);
const svgFonts = gulp.parallel(svg2Fonts);


/**
 * Export tasks
 */
exports.js = js;
exports.css = css;
exports.plugins = plugins;
exports.images = images;
exports.watch = watch;
exports.serve = serve;
exports.svg_sprite = svg_sprite;
exports.webp = webP;
exports.svg2Fonts = svgFonts;
