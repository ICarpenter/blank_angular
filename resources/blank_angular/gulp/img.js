'use strict';

var gulp = require('gulp');

module.exports = function(options) {
    gulp.task('img', function () {
        return gulp.src([
            options.src + '/assets/img/**/*.{jpeg,jpg,png,svg}'
        ])
        .pipe(gulp.dest(options.pub.img + '/'));
    });
};