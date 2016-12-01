Instructions for windows setup
==================================
<ol>
  <li>http://installfest.railsbridge.org/installfest/</li>
  this step is for ruby to install jekyll and node.js for npm commands</li>
  <li>https://github.com/shakyShane/jekyll-gulp-sass-browser-sync</li>
  <li>npm install -g gulp</li>
  <li>gem install jekyll</li>
  <li>gem install redcarpet</li>
  <li>gem install pygment.rb</li>
  <li>npm install in folder</li>
  <li>Add C:\Python27 to System Variables</li>
  search “System Variables” in start menu and look for “Environment Variables” window</li> <li>button</li>
  <li>Allow using .jade files instead of .html files,</li>
<ul>
  <li>npm install gulp-jade --save-dev</li>
  --save-dev: Package will appear in your devDependencies.
  <li> make _jadefiles folder in project </li>
  <li> make _includes folder in project </li>
  <li>Put this line of code into gulpfile.js:</li>
</ul>

var gulp = require('gulp-jade');

// Inputting Jade into the environment
gulp.task('jade', function(){
  return gulp.src('_jadefiles/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('_includes'));
});

<ul>
  <li>Then input this line of code into the ‘watch’ task</li>
</ul>

gulp.watch('_jadefiles/*.jade', ['jade']);

<ul>
<li>this is used to watch for any change in in a .jade file within _jadefiles</li>
</ul>
</ol>


Below this are instructions for the starter-kit I used

jekyll-gulp-sass-browser-sync
=============================

A starter project including full setup for Jekyll, GulpJS, SASS, AutoPrefixer &amp; BrowserSync

Here's a 1.5min [screencast](http://quick.as/pvrslgx) showing what you get.

And here's a GIF showing the CSS injecting.

![GIF](http://f.cl.ly/items/373y2E0e0i2p0E2O131g/test-gif.gif)

## System Preparation

To use this starter project, you'll need the following things installed on your machine.

1. [Jekyll](http://jekyllrb.com/) - `$ gem install jekyll`
2. [NodeJS](http://nodejs.org) - use the installer.
3. [GulpJS](https://github.com/gulpjs/gulp) - `$ npm install -g gulp` (mac users may need sudo)

## Local Installation

1. Clone this repo, or download it into a directory of your choice.
2. Inside the directory, run `npm install`.

## Usage

**development mode**

This will give you file watching, browser synchronisation, auto-rebuild, CSS injecting etc etc.

```shell
$ gulp
```

**jekyll**

As this is just a Jekyll project, you can use any of the commands listed in their [docs](http://jekyllrb.com/docs/usage/)

## Deploy with Gulp

You can easily deploy your site build to a gh-pages branch. First, follow the instructions at [gulp-gh-pages](https://github.com/rowoot/gulp-gh-pages) to get your branch prepared for the deployment and to install the module. Then, in `gulpfile.js` you'll want to include something like the code below. `gulp.src()` needs to be the path to your final site folder, which by default will be `_site`. If you change the `destination` in your `_config.yml` file, be sure to reflect that in your gulpfile.



```javascript
var deploy = require("gulp-gh-pages");

gulp.task("deploy", ["jekyll-build"], function () {
    return gulp.src("./_site/**/*")
        .pipe(deploy());
});
```
