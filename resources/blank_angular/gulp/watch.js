'use strict';

var gulp = require('gulp');

module.exports = function(options) {
    gulp.task('watch', function () {
        gulp.start('build');

        gulp.watch([
            options.src + '/**/*.less'
        ], function() {
            gulp.start('less');
        });

        gulp.watch([
            options.src + '/**/*.html'
        ], function() {
            gulp.start('templates');
        });

        gulp.watch([
            options.src + '/**/*.js'
        ], function() {
            gulp.start('angular');
        });
    });
};
