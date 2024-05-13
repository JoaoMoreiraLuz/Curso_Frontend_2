const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

function comprimeImagens() {
    return gulp.src('./source/images/*').pipe(imagemin()).pipe(gulp.dest('./build/images'));
}

function compilaSass() {
    return gulp.src('./source/styles/*.scss').pipe(sass({outputStyle:'compressed'})).pipe(gulp.dest('./build/styles'));
}

function uglyJS() {
    return gulp.src('./source/scripts/*.js').pipe(uglify()).pipe(gulp.dest('./build/scripts'));
}

exports.sass = compilaSass;

exports.default = function() {
    gulp.watch('./source/images/*', { ignoreInitial: false}, gulp.series(comprimeImagens));
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false}, gulp.series(uglyJS));
}