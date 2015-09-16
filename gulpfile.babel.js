import gulp from 'gulp'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'

const paths = {
  js: './jquery.scrollintoview.js'
}

gulp.task('js', () => {
  gulp.src(paths.js)
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('.'))
})

gulp.task('watch', () => {
  gulp.watch(paths.js, ['js'])
})

gulp.task('build', ['js'])

gulp.task('default', ['build', 'watch'])
