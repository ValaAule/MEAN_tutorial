/**
 * Created by Aule on 2/7/15.
 * Build file: Minifies, concatenates, creates sources and builds app.js
 */
var gulp = require('gulp')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')

//have to refactor this bit of code
gulp.task('js', function(){
    gulp.src(['ng/module.js', 'ng/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(ngAnnotate())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets'))
})