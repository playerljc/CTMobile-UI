const gulp = require('gulp');
const uglify = require("gulp-uglify");
const clean = require('gulp-clean');
const copyexts = ['less','svg','jpg','jpeg','png','bmp'];

gulp.task('copy', () => {
  for(let i = 0 ; i < copyexts.length; i++) {
    gulp.src(`src/**/*.${copyexts[i]}`).pipe(gulp.dest('lib'));
  }
});

gulp.task("minjs", () => {
  return gulp.src([
    'lib/src/*.js'
  ]).pipe(uglify()).pipe(gulp.dest("lib"))
});


gulp.task("clean", ['minjs'], () => {
  gulp.src("lib/src").pipe(clean());
});

gulp.task('default', ['copy', 'clean']);