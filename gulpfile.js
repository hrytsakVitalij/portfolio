var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
 
var sourcePaths = {
  styles: ['sass/**/*.scss']
};
 
var distPaths = {
  styles: 'css'
};

var distPaths_no_mini = {
  styles: 'css/not_mini'
};
  
// Compile scss files to css
gulp.task('sass', function () {
  gulp.src( sourcePaths.styles )
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
      browsers: ['last 20 versions']
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest( distPaths.styles ));
});

gulp.task('sass_no_mini', function () {
  gulp.src( sourcePaths.styles )
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer({
      browsers: ['last 20 versions']
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest( distPaths_no_mini.styles ));
});
 
gulp.task('watch', function() {
  gulp.watch(sourcePaths.styles, ['sass', 'sass_no_mini']);
});
 
gulp.task('build', ['sass', 'sass_no_mini']);
 
gulp.task('default', ['build', 'watch']);