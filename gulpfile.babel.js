import gulp from 'gulp'
import browserify from 'browserify'
import source from 'vinyl-source-stream'
import autoprefixer from 'gulp-autoprefixer'
import sass from 'gulp-sass'
import uglify from 'gulp-uglify';
import browser from 'browser-sync'
import nodemon from 'gulp-nodemon'
import babel from 'gulp-babel'
import babelify from 'babelify'

function reload() {
  browser.reload({ stream: false });
};

gulp.task('browsersync', function() {
  browser.init({
    files: ['public/**/*.*', 'views/**/*.*'], // BrowserSyncにまかせるファイル群
    proxy: 'http://localhost:3000',  // express の動作するポートにプロキシ
    port: 4000,  // BrowserSync は 4000 番ポートで起動
    open: false  // ブラウザ open しない
  });
});

gulp.task('serve', ['browsersync'], function () {
  nodemon({
    script: './bin/www',
    ext: 'js html css',
    ignore: [  // nodemon で監視しないディレクトリ
      'node_modules',
      'bin',
      'views',
      'public',
      'test'
    ],
    env: {
      'NODE_ENV': 'development'
    },
    stdout: false  // Express の再起動時のログを監視するため
  }).on('readable', function() {
  this.stdout.on('data', function(chunk) {
  if (/^Express\ server\ listening/.test(chunk)) {
        // Express の再起動が完了したら、reload() でBrowserSync に通知。
        // ※Express で出力する起動時のメッセージに合わせて比較文字列は修正
        reload();
      }
      process.stdout.write(chunk);
    });
    this.stderr.on('data', function(chunk) {
      process.stderr.write(chunk);
    });
  });
});

gulp.task("sass", function() {
    gulp.src("./public/stylesheets/style.scss")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("./public/stylesheets/"))
        .pipe(browser.reload({stream:true}));
});

gulp.task('babel', function() {
  gulp.src('./public/javascripts/es6/*.es6')
    .pipe(babel())
    .pipe(gulp.dest('./public/javascripts/'))
});

gulp.task("js",['babelify'], function() {
  gulp.src("./public/javascripts/min/*.js")
      .pipe(uglify())
      .pipe(browser.reload({stream:true}));
});

gulp.task('babelify', function () {
	browserify({
			entries: "./public/javascripts/app.js",
      transform: ['babelify']
		})
		.bundle()
		.pipe(source("app.js"))
		.pipe(gulp.dest("./public/javascripts/min"))
    .pipe(browser.reload({stream:true}));
});

gulp.task("default",['serve'], () => {
  gulp.watch(["./public/javascripts/*.js"],["js"]);
  gulp.watch("./public/stylesheets/*.scss",["sass"]);
});
