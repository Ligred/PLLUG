let gulp         = require('gulp'), //підключення gulp
    sass         = require('gulp-sass'), //підключення sass
    autoprefixer = require('gulp-autoprefixer'), // автопрефікси
    browserSync  = require('browser-sync'), // підключення browser-sync
    del          = require('del'),  // підключення бібліотеки для видалення файлів і дерикторій
    imagemin     = require('gulp-imagemin'),  // піключення бібліотеки для роботи з зображеннями
    pngquant     = require('imagemin-pngquant'),  //підключення бібліотеки для роботи з png
    cache        = require('gulp-cache'); // підключення бібліотеки для кешування файлів


gulp.task('sass', function(){
	return gulp.src('app/scss/**/*.scss')
	    .pipe(sass())
	    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))  // autoprefix
	    .pipe(sass({outputStyle: 'expanded'}))  //розширений стиль(скобка переноситься на новий рядок)
	    .pipe(gulp.dest('app/css'))
	    .pipe(browserSync.reload({stream: true})) //оновлення браузера
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('watch', ['browser-sync', 'sass'], function(){
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('clean', function(){
	return del.sync('dist');
});

gulp.task('img', function() {
    return gulp.src('app/img/**/*') 
        .pipe(cache(imagemin({  // зжимаємо зображення з кешуванням
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img')); 
});

gulp.task('build', ['clean', 'img', 'sass'], function(){

	let buildCss = gulp.src([
		'app/css/slyle.css',
		'app/css/icon.css'
	])
	.pipe(glup.dest('dist/css'))

	let buildFonts = gulp.src('app/font/**/*')
	.pipe(gulp.dest('dist/font'))

	let buildJs = gulp.src('app/js/**/*')
	.pipe(gulp.dest('dist/js'))

	let buildHtml = gulp.src('app/*.html')
	.pipe(gulp.dest('dist'))
});

gulp.task('clear', function () {  // таска для очистки кешу
    return cache.clearAll();
});


gulp.task('default', ['watch']); // ця таска робить таску watch дефолтною, тобто для її запуску потрібно написати лише gulp

//gulp build для збирання проекту

// ще треба буде дописати таски для обєднання js і css бібліотек і їх зжимання
// https://github.com/agragregra/gulp-lesson   