var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps =require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var cleanCss =require('gulp-clean-css');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var minify = require('gulp-minify');

gulp.task('sass', function() {
    gulp.src("sass/style.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(rename('styles.min.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest("build/css"));
});
gulp.task('scripts', function () {
    gulp.src([
        './js/classie.js',
        './js/selectFx.js',
        './js/selectsw.js',
        './js/menu.js',
        './js/popup.js',
        './js/formcart.js',
        './js/formcalc.js',
        './js/cart2.js'

    ])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build/js'))
        .pipe(rename('app.js'))
        .pipe(minify())
        .pipe(gulp.dest('build/js'))
});
gulp.task('watch', ['sass', 'scripts'], function () {
    browserSync.init({
        server: "./"
    });
    gulp.watch('./sass/**/*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch('./scripts/**/*.js', ['scripts']).on('change', browserSync.reload);
    gulp.watch('./*.html').on('change', browserSync.reload);


})




// /**
//  * Created by D&A on 05.12.2017.
//  */
// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var sourcemaps =require('gulp-sourcemaps');
// var autoprefixer = require('gulp-autoprefixer');
// var concat = require('gulp-concat');
// var cleanCss =require('gulp-clean-css');
// var rename = require('gulp-rename');
// var browserSync = require('browser-sync').create();
// var minify = require('gulp-minify');
// var imagemin = require('gulp-imagemin');
//
// gulp.task('sass', function() {
//     gulp.src("sass/style.scss")
//         .pipe(sourcemaps.init())
//         .pipe(sass())
//         .pipe(autoprefixer())
//         .pipe(rename('styles.min.css'))
//         .pipe(cleanCss())
//         .pipe(gulp.dest("build/css"));
// });
// gulp.task('scripts', function () {
//     gulp.src([
//         './js/classie.js',
//         './js/selectFx.js',
//         './js/selectsw.js',
//         './js/menu.js',
//         './js/popup.js',
//         './js/formcart.js',
//         './js/formcalc.js',
//         './js/cart2.js'
//
//     ])
//         .pipe(sourcemaps.init())
//         .pipe(concat('app.js'))
//         .pipe(gulp.dest('build/js'))
//         .pipe(rename('app.js'))
//         .pipe(minify())
//         .pipe(gulp.dest('build/js'))
// });
// gulp.task('watch', ['sass', 'scripts'], function () {
//     browserSync.init({
//         server: "./"
//     });
//     gulp.watch('./sass/**/*.scss', ['sass']).on('change', browserSync.reload);
//     gulp.watch('./scripts/**/*.js', ['scripts']).on('change', browserSync.reload);
//     gulp.watch('./*.html').on('change', browserSync.reload);
//
//
// })
// gulp.task('default', ['watch']);
//
// gulp.task('watch', function () {
//     gulp.watch('gulp_test/*', ['compress']);
// });
//
// gulp.task('compress', function () {
//     gulp.src('gulp_test/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('build/images'));
// });
