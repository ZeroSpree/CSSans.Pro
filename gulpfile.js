// Define variables.
const gulp         = require('gulp');
const autoprefixer = require('autoprefixer');
const postcss      = require('gulp-postcss');
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
    .src("./src/sass/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist/css/"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("./dist/css/"));
}

// Watch files
function watchFiles() {
  gulp.watch("./src/sass/**/*", css);
  gulp.watch("./**/*.html", browserSyncReload);
}

const watch = gulp.parallel(watchFiles, css, browserSync);

exports.css = css;
exports.default = watch;

