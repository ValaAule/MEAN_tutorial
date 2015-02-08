/**
 * Created by Aule on 2/7/15.
 * Build file for css
 */
    
var gulp = require('gulp')
var stylus = require('gulp-stylus')

gulp.task('css', function(){
    gulp.src('css/**/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('assets'))
})