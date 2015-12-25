var gulp = require('gulp'), uglify = require('gulp-uglify'), rename = require('gulp-rename');

//gulp.task('default', function () {
//
//});
gulp.task('default', ['compress']);


gulp.task('compress', function () {
  return gulp.src('src/*.js')
    .pipe(uglify({ source_map: true }))
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest('dist'));
});