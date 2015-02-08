/**
 * Created by Aule on 2/7/15.
 * Restarts Node.js with any file changes and ignores non-Node code
 */
var gulp = require('gulp')
var nodemon = require('gulp-nodemon')

gulp.task('dev:server', function(){
    nodemon({
        script: 'server.js',
        ext: 'js',
        ignore: ['ng*', 'gulp*', 'assets*']
    })
})