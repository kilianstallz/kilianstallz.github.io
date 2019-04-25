const gulp = require('gulp')
const webp = require('gulp-webp')

gulp.task('webp_s', () => gulp.src('src/img/*')
    .pipe(webp({
        quality: 80, preset: 'photo', method: 6
    }))
    .pipe(gulp.dest('assets'))
)

gulp.task('webp_m', () => gulp.src('assets/convert/*')
    .pipe(webp({
        quality: 60, preset: 'photo', method: 6
    }))
    .pipe(gulp.dest('assets'))
)

gulp.task('webp_l', () => gulp.src('_img/l/*')
    .pipe(webp({
        quality: 50, preset: 'photo', method: 6
    }))
    .pipe(gulp.dest('img'))
)

gulp.task('webp_conv', () => gulp.src('assets/convert/*')
    .pipe(webp({
        size: 10000,
        resize: { width: 2000, height: 1333 },
        quality: 5, preset: 'photo', method: 6
    }))
    .pipe(gulp.dest('assets'))
)

gulp.task('webp_lossless', () => gulp.src('_img/lossless/*')
    .pipe(webp({
        lossless: true
    }))
    .pipe(gulp.dest('img'))
)