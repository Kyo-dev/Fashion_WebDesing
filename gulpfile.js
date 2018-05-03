const gulp = require(`gulp`)
const sass = require(`gulp-sass`)
const browserSync = require('browser-sync').create();

// sass
gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
});

//  Browsersync
gulp.task('default', function() {

    browserSync.init({
        server: "./app"
    });

    // gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});