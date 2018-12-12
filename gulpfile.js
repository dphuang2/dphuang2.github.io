var browserSync = require('browser-sync');
var cp          = require('child_process');
var deploy      = require("gulp-gh-pages");
var gulp        = require('gulp');
var prefix      = require('gulp-autoprefixer');
var pump        = require('pump');
var del         = require('del');
var runSequence = require('run-sequence');
var sass        = require('gulp-sass');
var uglify      = require('gulp-uglify');
var uglifycss   = require('gulp-uglifycss');
var webp        = require('gulp-webp');

var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('_scss/main.scss')
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('css'));
});

/**
 * minify JavaScript and CSS
 */
gulp.task('compress', function (cb) {
  pump([
        gulp.src('assets/js/*.js'),
        uglify(),
        gulp.dest('_site/assets/js')
    ],
    cb
  );
  gulp.src('css/main.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest("_site/css/"));
});

/*
 * convert images to webp
 */
gulp.task('imagemin', function() {
  return gulp.src('assets/image/**')
    .pipe(webp())
    .pipe(gulp.dest('_site/assets/image/webp'))
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch(['_scss/*.scss', '_scss/*.css'], ['sass']);
    gulp.watch(['assets/image/**', '_config.yml', '*.html', '_layouts/*.html', '_posts/*', '_includes/*.html', 'assets/js/*'], ['jekyll-rebuild']);
});

/**
 * Deploy to github
 */
gulp.task("gh-deploy", function(){
    return gulp.src("./_site/**/*")
      .pipe(deploy({
        branch: "master",
        remoteUrl: "https://github.com/dphuang2/dphuang2.github.io.git",
      }));
});

/* 
 * Build entire website into _site
 */
gulp.task("prod", function (done) {
  del(['_site/assets/image/webp']);
  runSequence('jekyll-build', 'compress', 'imagemin', function(){
    done();
  });
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', function(done) {
  runSequence('browser-sync', 'watch', function(){
    done();
  });
});
