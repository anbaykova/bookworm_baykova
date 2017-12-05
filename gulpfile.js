/**
 * Created by D&A on 05.12.2017.
 */
var gulp = require("gulp");
var sass = require("gulp-sass");
gulp.task("sass", function() {
    gulp.src("sass/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("styles"));
});
