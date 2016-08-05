var gulp = require('gulp');

var argv = require('yargs').argv;
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var del = require('del');
var minifyjs = require('gulp-uglify');
var newer = require('newer');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');


// Usage:
// gulp   Build and watch for development
// gulp build --build=production

//TODO: eslint or tslint
//TODO: Sass integration, Sass lint, auto prefixer, Sass doc

// ------------- Variables and Configurations
var reload = browserSync.reload;

var PROJECT = {
    webroot: './'
};


var PATHS = {
    tsSource: 'app/**/*.ts',
    tsOutput: PROJECT.webroot + 'scripts',
    tsDef: "typings/**/*.ts",

    sassSource: 'styles/main.scss',
    sassOutputDir: PROJECT.webroot + 'styles/'
};

var WEB_SERVER_CONFIG = {
    root: PROJECT.webroot,
    host: 'localhost',
    port: 9000,
    defaultPage: 'index.html'
};

var PRODUCTION_BUILD = ( argv.build == 'production' ) ? true : false;

var tsProject = ts.createProject({
    declarationFiles: false,
    noExternalResolve: false,
    module: 'AMD',
    target: 'es5',
    removeComments: true,
    sortOutput: true
});



// ------------- Reusable Functions
function compileSass(inputSrc, outputDir) {
    if (PRODUCTION_BUILD) {
        return gulp.src(inputSrc)
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(gulp.dest(outputDir))
            .pipe(reload({stream: true}));
    } else {
        return gulp.src(inputSrc)
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(outputDir))
            .pipe(reload({stream: true}));
    }

}

// ------------- Tasks
gulp.task("clean", function () {
    //del([PROJECT.webroot], {force: true});
});




gulp.task('ts-compile', function () {
    if (PRODUCTION_BUILD) {
        var tsResult = gulp.src(PATHS.tsSource)
            .pipe(ts(tsProject));

        return tsResult.js
            .pipe(concat('app.js'))
            .pipe(minifyjs({mangle:false}))
            .pipe(gulp.dest(PATHS.tsOutput));
    } else {
        var tsResult = gulp.src(PATHS.tsSource)
            .pipe(sourcemaps.init())
            .pipe(ts(tsProject));

        return tsResult.js
            .pipe(concat('app.js'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(PATHS.tsOutput));
    }
});

gulp.task('sass-compile', function () {
    compileSass('styles/main.scss', 'styles/');
    return compileSass(PATHS.sassSource, PROJECT.webroot + 'styles/');
});

gulp.task('ts:watch', ['ts-compile'], function () {
    gulp.watch(
        [
            PATHS.tsDef,
            PATHS.tsSource
        ]
        , ['ts-compile']);
});

gulp.task('sass:watch', ['sass-compile'], function () {
    gulp.watch(
        [
            'styles/**/*.scss'
        ]
        , ['sass-compile']);
});


gulp.task('asset:watch', function () {
    // gulp.watch(
    //  ['app/**/*.html', 'app/**/*.json'],
    //  ['copy']
    // );
});

gulp.task('copy', function () {

    //copy javascript libraries

    //copy htmls
    // gulp.src(['app/**/*.*'])
    //  .pipe(newer(PROJECT.webroot))
    //  .pipe(gulp.dest(PROJECT.webroot));
});


gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: WEB_SERVER_CONFIG.root,
            directory: true
        },
        port: WEB_SERVER_CONFIG.port
    });

    gulp.watch([
            './*.html',
            './app/**/*.html',
            './build/**/*.js'
        ], ['copy']
    ).on("change", browserSync.reload);
});


gulp.task('build', ['clean', 'copy', 'sass-compile']);

gulp.task('default', ['build', 'serve', 'sass:watch', 'asset:watch']);
