var gulp = require('gulp');
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var changed = require('gulp-changed');
var minifyHTML = require('gulp-minify-html');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');


// default task : gulp komutunu çalıştırmak yeterli.
gulp.task('default', [ ], function() {
    connect.server({
        root: 'app/',
        livereload: true,
        port: 9999
    });
});
