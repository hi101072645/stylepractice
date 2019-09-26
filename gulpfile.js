var gulp = require('gulp');
var cssUrls = require('gulp-css-urls');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var autoprefixer = require('gulp-autoprefixer');


// pug
var pug = require('gulp-load-plugins')();

gulp.task('pug', function () {
	gulp.src('src/pug/*.pug') //來源目錄
		.pipe(pug.plumber())
		.pipe(pug.pug({
			pretty: true // 是否美化HTML
		}))
		.pipe(gulp.dest('src/visual')); // dest:destination
});

// sass 編譯函式
gulp.task('sass', function () {
	return gulp.src('src/sass/*.scss') //來源目錄
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError)) //經由sass 轉譯
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('src/css')); //目的地目錄
});

// sass 前綴
gulp.task('testAutoFx', function () {
	gulp.src('src/css/style.css')
		.pipe(autoprefixer({
			cascade: true, //是否美化属性值 默认：true 像这样：
			remove: true //是否去掉不必要的前缀 默认：true
		}))
		.pipe(gulp.dest('src/css/comp'));
});


gulp.task('default', ['sass'], function () {
	browserSync.init({
		server: {
			//根目錄不變與node同層
			baseDir: "src/",
			// index: "visual/index2.html" 因為會影響到連結結構 除非html主頁抓至source下第一層
			//請手動在3000port後輸入visual/index2.html
		}
	});

	gulp.watch(["src/sass/*.scss", "src/sass/**/*.scss"], ['sass']).on('change', reload);
	gulp.watch("src/visual/*.html").on('change', reload);
	gulp.watch("src/js/*.js").on('change', reload);
	gulp.watch(["src/pug/*.pug"],['pug']).on('change', reload);
	gulp.watch("src/img/*").on('change', reload);
	// gulp.watch("images/*").on('change', reload);
});


gulp.task('trancss', ['cssUrls']);