const gulp = require("gulp");
const webpack = require("webpack-stream");
const dist =  'C:/MAMP/htdocs/project';
const browsersync = require("browser-sync");

gulp.task("copy", () => {
  return gulp.src("./src/**/*.*")
    .pipe(gulp.dest(dist))
});

gulp.task("build-js", () => {
  return gulp.src("./scripts/index.js")
    .pipe(webpack({
      mode: 'development',
      output: {
        filename: 'script.js'
      },
      watch: false,
      devtool: "source-map",
      module: {
        rules: [{
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  debug: true,
                  corejs: 3,
                  useBuiltIns: "usage"
                }]
              ]
            }
          }
        }]
      }
    }))
    .pipe(gulp.dest(dist))
    .on("end", browsersync.reload);
});
gulp.task("watch", () => {
  browsersync.init({
    proxy: "http://localhost/project"
  });
  gulp.watch("./scripts/**/*.js", gulp.parallel("build-js"));
   gulp.watch("./src/**/*.php", gulp.parallel("copy"));
});

gulp.task("build-prod-js", () => {
  return gulp.src("./scripts/index.js")
    .pipe(webpack({
      mode: 'production',
      output: {
        filename: `${dist}/script.js`
      },
      module: {
        rules: [{
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  corejs: 3,
                  useBuiltIns: "usage"
                }]
              ]
            }
          }
        }]
      }
    }))
    .pipe(gulp.dest(dist));
});

// DEVELOPMENT
gulp.task("development", gulp.parallel("watch", "build-js", "copy"));

// PRODUCTION
gulp.task("production", gulp.parallel("copy", "build-prod-js"));