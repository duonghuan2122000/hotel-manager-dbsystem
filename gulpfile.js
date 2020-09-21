const gulp = require('gulp');
const browserSync = require('browser-sync');

function watch(){
    browserSync.init({
        server: {
            baseDir: './theme'
        }
    });
    gulp.watch('./theme/*.html').on('change', browserSync.reload);
    gulp.watch('./them/css/**/*.css').on('change', browserSync.reload);
    gulp.watch('./them/js/**/*.js').on('change', browserSync.reload);
}

module.exports = {
    watch
}