var gulp = require('gulp');
var uglify = require("gulp-uglify");
var clean = require('gulp-clean');

gulp.task('copy', function () {
  gulp.src('src/**/*.less')
    .pipe(gulp.dest('lib'))
});

gulp.task("minjs", function () {
  return gulp.src([
    'lib/src/*.js'
  ])
    .pipe(uglify())
    .pipe(gulp.dest("lib"))
});

gulp.task("clean", ['minjs'], function () {
  gulp.src("lib/src").pipe(clean());
});

gulp.task('default', ['copy', 'clean']);
