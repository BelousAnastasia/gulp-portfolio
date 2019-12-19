var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano      = require("gulp-cssnano");

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['app/scss/*.scss'])
        .pipe(sass())
        .pipe(autoprefixer({
          overrideBrowserslist: ['last 2 versions'],
          cascade: false
        }))
        .pipe(cssnano())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});
// gulp.task("html", function() {
//     return gulp.src(['app/*.html'])
//     .pipe(gulp.dest("dist"));
// });
gulp.task("scripts", function() {
    return gulp.src(['app/js/*.js'])
    .pipe(gulp.dest("dist/js"));
});


// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', 'scripts',  function() {

    browserSync.init({
        server: "./app"  
    });

    gulp.watch(['app/scss/*.scss'], gulp.series('sass'));
    // gulp.watch(['app/*.html'], gulp.series('html'));
    gulp.watch(['app/js/*.js'], gulp.series('scripts'));
    gulp.watch("app/*.html").on('change', browserSync.reload);
}));

gulp.task('dev', gulp.parallel('serve'));