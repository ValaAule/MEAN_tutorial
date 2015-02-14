/**
 * Created by Aule on 2/6/15.
 * Build file
 */
var gulp = require('gulp')
var fs = require('fs')
fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
    require('./gulp/' + task)
})

// assembles all the js files
gulp.task('watch:js', ['js'], function(){
    gulp.watch('ng/**/*.js', ['js'])
})

// assembles all the css files
gulp.task('watch:css', ['css'], function () {
    gulp.watch('css/**/*.styl',['css'])
})

// master task to watch changes in both css, js and node server files
gulp.task('dev', ['watch:css', 'watch:js', 'dev:server'])