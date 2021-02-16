const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();
const purgecss = require('gulp-purgecss');

// Sass Task
function scssTask() {
  return (
    // src('scss/style.scss', { sourcemaps: true })
    // .pipe(sass())
    // .pipe(postcss([cssnano()]))
    // .pipe(dest('public/css', { sourcemaps: '.' }))
    src('scss/style.scss', { sourcemaps: false })
      .pipe(sass())
      // .pipe(
      //   purgecss({
      //     content: ['views/**/*.ejs'],
      //   })
      // )
      // .pipe(postcss([cssnano()]))
      .pipe(dest('public/css'))
  );
}

// Browsersync Tasks
function browsersyncServe(cb) {
  browsersync.init({
    proxy: 'localhost:3000',
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask() {
  watch('views/**/*.ejs', browsersyncReload);
  watch(['scss/**/*.scss'], series(scssTask, browsersyncReload));
}

// Default Gulp Task
exports.default = series(scssTask, browsersyncServe, watchTask);
