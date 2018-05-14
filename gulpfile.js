const gulp = require('gulp');
const pug = require('gulp-pug');
var browserSync = require('browser-sync').create();

gulp.task('pug', () => {

    gulp.src('./src/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./'))

});

gulp.task('serve', ['pug'], function () {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./src/*.pug", ['pug']);

    gulp.watch("./*.html").on('change', browserSync.reload);
});
