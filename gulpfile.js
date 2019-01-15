// Define variables.
const gulp         = require('gulp');
const autoprefixer = require('autoprefixer');
const postcss      = require('gulp-postcss');
const cssvariables = require('postcss-css-variables');
const sass         = require('gulp-sass');
const plumber      = require('gulp-plumber');
const browsersync  = require('browser-sync').create();
const sourcemaps   = require('gulp-sourcemaps');
const cssnano      = require("cssnano");
const rename       = require("gulp-rename");

// BrowserSync
const browserSyncConfig = {
  server: true,
  ghostMode: true,
  logFileChanges: true,
  open: true,
  port: 3000,
  files: [
    './src/sass/**/*.scss'
  ],
}

// BrowserSync Start
function browserSync() {
  browsersync.init(browserSyncConfig);
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// CSS task
function css() {
  return gulp

     // Dev version
    .src("./src/sass/app/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist/app/"))

     // Prod version
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("./dist/app/"))
}

// CSSans task
function cssans() {
  return gulp
     // Dev version
    .src("./src/sass/cssans/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist/cssans/"))

     // Prod version
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("./dist/cssans/"))

     // IE version (doesn't support CSS vars)
    .pipe(rename({ suffix: ".ie" }))
    .pipe(postcss([cssvariables]))
    .pipe(gulp.dest("./dist/cssans/"));
}

// Watch files
function watchFiles() {
  gulp.watch("./src/sass/**/*", gulp.parallel(css, cssans));
  gulp.watch("./**/*.html", browserSyncReload);
}

const watch = gulp.parallel(watchFiles, css, cssans, browserSync);

exports.css = css;
exports.cssans = cssans;
exports.default = watch;

