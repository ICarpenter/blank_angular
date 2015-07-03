'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

module.exports = function(options) {

  gulp.task('clean', function (done) {
    var pub = options.pub;
    var pattern = [pub.css + '/', pub.fonts + '/', pub.css + '/', '!' + pub.js + '/vendor', '!' + pub.js + '/'];
    $.del(pattern, { force: true }, done);
  });

  gulp.task('build', ['angular', 'less', 'templates', 'fonts', 'img']);
};