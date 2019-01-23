// Define variables.
const gulp         = require('gulp');
const autoprefixer = require('autoprefixer');
const postcss      = require('gulp-postcss');
const cssvariables = require('postcss-css-variables');
const sass         = require('gulp-sass');
const plumber      = require('gulp-plumber');
const browsersync  = require('browser-sync').create();
const sourcemaps   = require('gulp-sourcemaps');
const cssnano      = require('cssnano');
const rename       = require('gulp-rename');
const run          = require('gulp-run');
const del          = require('del');
const concat       = require('gulp-concat');
const uglify       = require('gulp-uglify');

// BrowserSync
const browserSyncConfig = {
  server: '_site/',
  ghostMode: true,
  logFileChanges: true,
  open: true,
  port: 3000,
  files: [
    './_src/cssans/sass/**/*.scss',
    './_src/site/sass/**/*.scss'
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

// Clean Assets
function clean() {
  return del(['_includes/assets/', 'dist', '_site']);
}

// Main CSS task.
// This watches both the site CSS and CSSans
function cssSite() {
  return gulp

     // Dev version
    .src('./_src/site/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./_min/'))
    .pipe(gulp.dest('./_site/_min/')) /* Update _site for live reloading */

     // Prod version
    .pipe(rename({ suffix: '.min' }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest('./_includes/assets/'));
}

// CSSans only task
// outputs to dist/folder
function cssans() {
  return gulp
    .src('./_src/cssans/sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'expanded' }))

     // Prod version
    .pipe(rename({ suffix: '.min' }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("./dist/"))

     // IE version (doesn't support CSS vars)
    .pipe(rename({ suffix: ".ie" }))
    .pipe(postcss([cssvariables]))
    .pipe(gulp.dest('./dist/'));
}

// Concatenate and minify site scripts
function scriptsSite() {
  return (
    gulp
      .src(['./_src/cssans/js/**/*.js', './_src/site/js/**/*.js'])
      .pipe(concat('main.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./_includes/assets/'))
  );
}

// Concatenate and minify site scripts
function scriptsCSSans() {
  return (
    gulp
      .src(['./_src/cssans/js/**/*.js'])
      .pipe(concat('cssans.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/'))
  );
}

// Jekyll task
function jekyll() {
    return gulp.src('.').pipe(run('bundle exec jekyll build --config _config.yml,_config.dev.yml'));
}

// Jekyll prod
// Useful for testing prod version before deploys
function jekyllProd() {
    return gulp.src('.').pipe(run('bundle exec jekyll build'));
}

// Watch files
function watchFiles() {
  gulp.watch('./_src/site/sass/**/*', cssSite);
  gulp.watch('./_src/cssans/sass/**/*', css);
  gulp.watch(['./_src/cssans/js/**/*.js', './_src/site/js/**/*.js'], scriptsSite);
  gulp.watch('./_src/cssans/js/**/*', scriptsCSSans);
  gulp.watch(
    [
      './_includes/**/*.html',
      './_layouts/**/*',
      './_src/site/js/**/*',
      './_src/cssans/js/**/*'
    ],
    gulp.series(jekyll, browserSyncReload)
  );
}

const css = gulp.series(cssSite, cssans);
const js = gulp.series(scriptsSite, scriptsCSSans);
const watch = gulp.series(clean, js, jekyll, css, gulp.parallel(watchFiles, browserSync));
const test = gulp.series(clean, js, css, jekyllProd, gulp.parallel(watchFiles, browserSync));

exports.clean = clean;
exports.css = css;
exports.js = js;
exports.test = test;
exports.default = watch;

