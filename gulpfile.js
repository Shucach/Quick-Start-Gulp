//Modules
const gulp = require('gulp');
const webpack = require('webpack-stream');

const imagemin = require("gulp-imagemin");
const imageminMozjpeg = require('imagemin-mozjpeg');

const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
//const purgecss = require('gulp-purgecss')

const browserSync = require("browser-sync").create();
const svgSprite = require('gulp-svg-sprite');

const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');

const ttf2woff2p = require('gulp-ttf2woff2');
const ttf2woffp = require('gulp-ttf2woff');

const webp = require('gulp-webp');

const sass = require('gulp-sass');

const mjml = require('gulp-mjml')

/**
 * Style
 */
function style() {
    return gulp.src([
        //TODO: insert before plugins load
        //'app/sass/plugins/jquery.scrollbar.sass',

        'app/sass/reset.sass',
        'app/sass/grid.scss',
        'app/sass/core.sass',
        'app/sass/fonts.scss',
        'app/sass/style.sass',

        //TODO: example
        'app/sass/example.sass',
    ])
        .pipe(sass())
        .pipe(concat('main.css'))
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
        'app/js/plugins/jquery.scrollbar.js',
    ])
    .pipe(concat('main.plugin.js'))
    .pipe(rename('plugins.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'));
}

/**
 * Optimize Images
 */
function imagesMin() {
    return gulp
        .src('app/images/*')
        .pipe(
            imagemin([
                imageminMozjpeg({
                    quality: 85
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
        .pipe(webp({quality: 85}))
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
 * Create emails
 * https://mjml.io/
 */
function emails() {
    return gulp.src('email/test-mail.mjml')
        .pipe(mjml())
        .pipe(gulp.dest('email/html/'))
}

/**
 * Watch
 */
function watchFiles() {
    gulp.watch("app/sass/*.styl", style);
    gulp.watch(["app/js/*.js", "app/js/classes/*.js", "app/js/modules/*.js"], scripts);
}

function watchEmail() {
    gulp.watch(['email/*.mjml'], emails);
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

    let st = gulp.watch(["app/sass/*.sass", "app/sass/*.scss"], style),
        js = gulp.watch(["app/js/*.js", "app/js/classes/*.js", "app/js/modules/*.js"], scripts);

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
 * https://www.npmjs.com/package/gulp-iconfont-css
 * https://www.npmjs.com/package/gulp-iconfont
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
            formats: ['woff', 'woff2'],
            normalize: true
        }))
        .pipe(gulp.dest('fonts/svg-fonts/'));
}

/**
 * Convert TTF to web formats woff2, woff
 * https://www.npmjs.com/package/gulp-ttf2woff2
 * https://www.npmjs.com/package/gulp-ttf2woff
 */
function ttf2woffAll() {
    return gulp.series(
        ttf2woff2Fn,
        ttf2woffFn
    )();
}
function ttf2woff2Fn() {
    return gulp.src(['app/fontsTTF/*.ttf'])
        .pipe(ttf2woff2p())
        .pipe(gulp.dest('fonts/convert-fonts/'));
}
function ttf2woffFn() {
    return gulp.src(['app/fontsTTF/*.ttf'])
        .pipe(ttf2woffp())
        .pipe(gulp.dest('fonts/convert-fonts/'));
}


/**
 * Define complex tasks
 */
const js = gulp.series(scripts);
const css = gulp.series(style);
//const purge_css = gulp.series(purgeCss);
const plugins = gulp.series(jsPlugins);
const images = gulp.series(imagesMin);
const svg_sprite = gulp.series(createSvgSprite);
const webP = gulp.series(imageToWebP);
const watch = gulp.parallel(watchFiles);
const serve = gulp.parallel(browserSyncWatch);
const svgFonts = gulp.parallel(svg2Fonts);
const ttf2woff = gulp.parallel(ttf2woffAll);
const email = gulp.series(emails);
const email_watch = gulp.parallel(watchEmail);


/**
 * Export tasks
 */
exports.js = js;
exports.css = css;
//exports.purge_css = purge_css;
exports.plugins = plugins;
exports.images = images;
exports.watch = watch;
exports.serve = serve;
exports.svg_sprite = svg_sprite;
exports.webp = webP;
exports.svg2Fonts = svgFonts;
exports.ttf2woff = ttf2woff;
exports.email = email;
exports.email_watch = email_watch;
