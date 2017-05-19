var gulp = require('gulp');      
var scssPlugin = require('gulp-sass');
var connect = require('gulp-connect');
  
gulp.task('myStyles', function () {
    gulp.src('scss/*.scss')
        .pipe(scssPlugin())
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('watchMyStyles', function() {
    gulp.watch('scss/*.scss', ['myStyles']);
});

gulp.task('watchMyHtmls', function () {
  gulp.watch(['*.html'], ['html']);
});

gulp.task('default', ['watchMyStyles', 'watchMyHtmls', 'connect']);