'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*']
});

module.exports = function(options) {
    gulp.task('fonts', function () {
        return gulp.src([
            options.src + '/**/*.{eot,svg,ttf,woff,woff2}',
            '!' + options.src + '/assets/img/**/*.svg'
        ])
        .pipe($.flatten())
        .pipe(gulp.dest(options.pub.fonts + '/'));
    });
};