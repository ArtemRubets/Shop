'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

sass.compiler = require('node-sass');
 

gulp.task('server', function() {

    browserSync.init({
        server: "./app",
        notify: false
    });
});

gulp.task('style', function () {
  return gulp.src('app/sass/*.scss')
  	.pipe(sourcemaps.init())    //sourcemaps
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())	//sourcemaps

    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('app/css/'))
    .pipe(browserSync.stream());

});

// Watch Task
gulp.task('watch', function() {
    gulp.watch("app/sass/*.scss" ,gulp.parallel('style'));
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/js/*.js").on('change', browserSync.reload);
});
// Watch Task


    // gulp.watch('app/img/*',gulp.parallel('img'));


gulp.task('img', () =>
    gulp.src('app/img/*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
    .pipe(gulp.dest('dist/images')) 
);

gulp.task('default' , gulp.parallel('watch' , 'server' ,'style'));