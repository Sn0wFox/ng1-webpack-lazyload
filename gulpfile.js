const gulp      = require('gulp');
const webpack   = require('webpack');
const gWebpack  = require('webpack-stream');
const path      = require('path');

const webpackConfig = require('./webpack.config');

gulp.task('build', () => {
  return gulp
    .src('app/app.ts')
    .pipe(gWebpack(webpackConfig, webpack))
    .pipe(gulp.dest('app/dist'));
});

gulp.task('watch', () => {
  gulp.watch(['app/**/*.js', '!app/dist/*', '!app/bower_components/*'], ['build']);
});