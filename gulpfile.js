let preprocessor = 'sass';
const {src, dest, parallel, series, watch} = require('gulp'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    cleancss = require('gulp-clean-css'),
    pug = require('gulp-pug'),
    babel = require('gulp-babel'),
    ttf2woff = require('gulp-ttf2woff'),
    ttf2woff2 = require("gulp-ttftowoff2"),
    changed = require('gulp-changed'),
    image = require('gulp-imagemin'),
    webp = require('gulp-webp'),
    rename = require('gulp-rename');

const arraySrc = {
    "img": {
        "src": 'src/images/**/*',
        "dest": 'app/img',
    },
    "fonts": {
        "src": 'src/fonts/**/*.ttf',
        "dest": 'app/fonts/',
    },
    "app": {
        "url" : "app/"
    }
};

function optimizeImage() {
    return src(arraySrc.img.src)
        .pipe(changed(arraySrc.img.dest))
        .pipe(image({
            progressive: true
        }))
        .pipe(dest(arraySrc.img.dest))
        .pipe(browserSync.stream())
}

function webpImage() {
    return src(arraySrc.img.src)
        .pipe(changed('app/img'))
        .pipe(webp())
        .pipe(dest(arraySrc.img.dest))
        .pipe(browserSync.stream())
}


function woff() {
    return src([
        arraySrc.fonts.src,
    ])
        .pipe(changed('app/fonts', {
            extension: '.woff',
        }))
        .pipe(ttf2woff())
        .pipe(dest(arraySrc.fonts.dest))
        .pipe(browserSync.stream())
}

function woff2() {
    return src([
        arraySrc.fonts.src,
    ])
        .pipe(changed('app/fonts', {
            extension: '.woff2',
        }))
        .pipe(ttf2woff2())
        .pipe(dest(arraySrc.fonts.dest))
        .pipe(browserSync.stream())
}

function pugg() {
    return src([
        'src/pug/pages/**/*.pug',
    ])
        .pipe(pug({pretty: true}))
        .pipe(dest(arraySrc.app.url))
        .pipe(browserSync.stream())
}

function browsersync() {
    browserSync.init({
        server: {baseDir: arraySrc.app.url},
        notify: false,
        online: true
    })
}

function scripts() {
    return src([
        'node_modules/vanilla-lazyload/dist/lazyload.min.js',
        'node_modules/imask/dist/imask.min.js',
        'modules/swiper-master/dist/swiper-bundle.js',
        // 'node_modules/imask/dist/imask.js',
        // 'node_modules/split-type/dist/index.js',
        // 'node_modules/gsap/dist/gsap.min.js',
        // 'node_modules/gsap/dist/ScrollTrigger.min.js',
    ])
        // .pipe(babel({
        //     presets: [
        //         [
        //             "@babel/preset-env",
        //             {
        //                 "useBuiltIns": "entry",
        //                 "corejs": "3.22"
        //             }
        //         ]
        //     ]
        // }))
        .pipe(uglify())
        .pipe(dest('app/js/'))
        .pipe(browserSync.stream())
}

function scriptsMain() {
    return src([
        // 'node_modules/imask/dist/imask.min.js',
        // 'modules/swiper-master/dist/swiper-bundle.min.js',
        // 'node_modules/split-type/dist/index.js',
        // 'node_modules/gsap/dist/gsap.min.js',
        // 'node_modules/gsap/dist/ScrollTrigger.min.js',
        'src/js/main.js',
    ])
        .pipe(concat('script.min.js'))
        // .pipe(babel({
        //     presets: [
        //         [
        //             "@babel/preset-env",
        //             {
        //                 "useBuiltIns": "entry",
        //                 "corejs": "3.22"
        //             }
        //         ]
        //     ]
        // }))
        // .pipe(uglify())
        .pipe(dest('app/js/'))
        .pipe(browserSync.stream())
}

function startwatch() {
    watch(['src/images/**/*'], optimizeImage);
    watch(['src/images/**/*'], webpImage);
    watch(['src/fonts/**/*.ttf'], woff);
    watch(['src/js/**/*.js'], scripts);
    watch(['src/js/**/*.js'], scriptsMain);
    watch(['src/pug/**/*.pug'], pugg);
    watch('src/' + preprocessor + '/**/*', styles_part);
    watch('src/' + preprocessor + '/**/*', styles);
    watch('src/**/*.html').on('change', browserSync.reload);
}

function styles_part() {
    return src([
        'src/' + preprocessor + '/**/*.' + preprocessor,
    ], {ignore: 'src/' + preprocessor + '/common/**/*.' + preprocessor})
        .pipe(eval(preprocessor)())
        .pipe(autoprefixer({grid: true}))
        .pipe(cleancss({level: {1: {specialComments: 0}}/* , format: 'beautify' */}))
        .pipe(dest('app/css/parts'))
        .pipe(browserSync.stream())
}

function styles() {
    return src('src/' + preprocessor + '/main.' + preprocessor)
        .pipe(eval(preprocessor)())
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({grid: true}))
        .pipe(cleancss({level: {1: {specialComments: 0}}/* , format: 'beautify' */}))
        .pipe(dest('app/css/'))
        .pipe(browserSync.stream())
}

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.scriptsMain = scriptsMain;
exports.styles = styles;
exports.styles_part = styles_part;
exports.pugg = pugg;
exports.woff = woff;
exports.woff2 = woff2;
exports.optimizeImage = optimizeImage;
exports.webpImage = webpImage;

exports.default = parallel(pugg, optimizeImage, webpImage, woff, woff2, styles, styles_part, scripts, scriptsMain, browsersync, startwatch);