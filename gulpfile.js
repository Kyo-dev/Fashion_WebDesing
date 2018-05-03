var gulp = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

// sass
gulp.task('sass', function () {
    gulp.src('./scss/styless.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.stream());
});

//  Browsersync
gulp.task('default', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./scss/styless.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
});