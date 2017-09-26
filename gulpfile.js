var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('bundleCSS', function(){
  return gulp.src('./sass/style.scss')
    .pipe(sass({
        'outputStyle' : 'compressed'
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./build/css'))
});

gulp.task('bundleJS', function() {
  return gulp.src([
      './js/jquery.js', 
      './js/light-slider.js', 
      './js/validation.js',
      './js/main.js'
    ])
    .pipe(concat('script.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('watch', ['bundleCSS','bundleJS'], function (){
  gulp.watch('./sass/**/*.scss', ['bundleCSS']);
  gulp.watch('./js/*.js', ['bundleJS']);
});