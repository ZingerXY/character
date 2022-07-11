var gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;

jsFiles = [
	'./js/auto.js',
	'./js/base64.min.js',
	'./js/LZW.js',
	'./js/perks.js',
	'./js/quest.js',
	'./js/traits.js',
	'./js/app.js',
];

jsMinResult = 'app.min.js';

gulp.task('js', function () {
	return gulp.src(jsFiles)
		.pipe(concat(jsMinResult))
		.pipe(uglify())
		.pipe(gulp.dest('./js/'));
});

gulp.task('watch', function () {
	gulp.watch(jsFiles, gulp.series('js'));
});

gulp.task('default', gulp.series('js', 'watch'));