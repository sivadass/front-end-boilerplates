var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var wait = require('gulp-wait');

gulp.task('bundleCSS', function(){
  return gulp.src('./sass/style.scss')
    .pipe(wait(50))
    .pipe(sass({
        'outputStyle' : 'compressed'
    }))
    .on('error', swallowError)
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
    .on('error', swallowError)
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

// Swallow Error
function swallowError(error){
  console.log(error.toString())
  this.emit('end')
}

gulp.task('watch', ['bundleCSS','bundleJS'], function (){
  gulp.watch('./sass/**/*.scss', ['bundleCSS']);
  gulp.watch('./js/*.js', ['bundleJS']);
});