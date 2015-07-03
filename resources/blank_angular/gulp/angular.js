'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*']
});

module.exports = function(options) {
    gulp.task('angular', function () {
        return gulp.src([
            options.src + '/{app,components,services,filters}/**/*.js',
            '!' + options.src + '/{app,components,services,filters}/**/*.spec.js',
            '!' + options.src + '/{app,components,services,filters}/**/*.mock.js'
        ])
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.concat('app.js'))
        .pipe(gulp.dest(options.pub.js))
        .pipe($.size());
    });
};