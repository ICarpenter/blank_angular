'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

module.exports = function(options) {
    gulp.task('less', function () {
        var lessOptions = {
            options: [
                'bower_components',
                options.src + '/app'
            ]
        };

        return gulp.src([
            options.src + '/app/less/index.less'
        ])
        .pipe($.less(lessOptions)).on('error', options.errorHandler('Less'))
        .pipe(gulp.dest(options.pub.css))
    });
};