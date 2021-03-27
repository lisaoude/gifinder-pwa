const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

return gulp.src([
  './public/styles/styles.css'
])
  .pipe(cleanCSS())
  .pipe(gulp.dest('./public/buildcss/'))