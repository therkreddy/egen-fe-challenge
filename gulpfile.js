var gulp = require('gulp');
var open = require('gulp-open');
var os = require('os');
var connect = require('gulp-connect');
var runSequence = require('run-sequence');
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')

//check browser version
var browser = os.platform() === 'linux' ? 'google-chrome' : (
  os.platform() === 'darwin' ? 'google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));

//connect to server
gulp.task('rk', function() {
	connect.server({
		root: 'app/',
		port: 9090
	});
});

// Open the default application homepage
gulp.task('openApp', function(){
  var options = {
    uri: 'http://localhost:9090',
    app: browser
  };
  gulp.src(__filename)
  .pipe(open(options));
});

// default task
gulp.task('default', function() {
   console.log('.........Tasks lined up to run.......');
  runSequence('rk',
              ['openApp']);
});

//minify and concat
gulp.task('build', function () {
  gulp.src(['app/index.js','app/js/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/'))
});