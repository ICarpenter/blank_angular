'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*']
});

module.exports = function(options) {
    gulp.task('templates', function () {
        return gulp.src([
            options.src + '/{app,components}/**/*.tpl.{html,svg}'
        ])
        .pipe($.angularTemplatecache('templateCacheHtml.js', {
            module: 'blank_angular'
        }))
        .pipe(gulp.dest(options.pub.js));
    });
};