const gulp = require("gulp");
const pug = require("gulp-pug");

gulp.task("pug-compile", () => {
  return gulp
    .src(["pug/**/*.pug", "!pug/includes/**/*.pug"])
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("html"));
});

gulp.task("watch", () => {
  gulp.watch("pug/**/*.pug", gulp.series("pug-compile"));
});
