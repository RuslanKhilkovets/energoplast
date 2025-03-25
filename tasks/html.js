const { src, dest } = require("gulp");
const include = require("gulp-file-include");
const bs = require("browser-sync");
const plumber = require("gulp-plumber");

module.exports = function html() {
  return src(["src/**/*.html", "!src/components/**/*.html"])
    .pipe(
      plumber({
        errorHandler: function (err) {
          // Log the error with the file name
          console.error(`Error in file: ${err.fileName}`);
          console.error(err.message);
          this.emit("end"); // Continue processing other files after an error
        },
      })
    )
    .pipe(include())
    .pipe(dest("build"))
    .pipe(bs.stream());
};
