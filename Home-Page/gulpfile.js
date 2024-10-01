const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const pug = require("gulp-pug");
const plumber = require("gulp-plumber");
const replace = require("gulp-replace");

// 定義樣式轉換任務
function styles() {
  return gulp
    .src("src/sass/style.sass")
    .pipe(plumber())
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/css"));
}

// 定義模板轉換任務
function templates() {
  return gulp
    .src("src/pug/*.pug")
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest("dist"));
}

// 定義 HTML 更新任務
function updateHTML() {
  return gulp
    .src("dist/**/*.html")
    .pipe(replace(/style\.min\.css/g, "style.css")) // 將 .min.css 替換為 .css
    .pipe(gulp.dest("dist"));
}

// 定義文件監視任務
function watchFiles() {
  gulp.watch("src/sass/**/*.sass", styles); // 監聽 Sass 檔案變動並自動執行 styles 任務
  gulp.watch("src/pug/**/*.pug", templates); // 監聽 Pug 檔案變動並自動執行 templates 任務
}

// 定義構建任務，包含監聽文件變動的功能
const build = gulp.series(
  gulp.parallel(styles, templates),
  updateHTML,
  watchFiles
);

// 將任務導出
exports.styles = styles;
exports.templates = templates;
exports.watch = watchFiles;
exports.default = build;
