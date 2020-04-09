const { watch, src, dest, series } = require('gulp');
//переименование файлов
const rename = require('gulp-rename')
const cssmin = require('gulp-cssmin');
const sass = require("gulp-sass")

const plumber = require("gulp-plumber")
// соединение файлов
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer');

//все итоговые файлы у нас уходят в папку билд



function getCSS(){
    // подтянуть несколько css файлов, сжать, переименовать, и положить в итоговый билд
    return src('sass/*.sass')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    // .pipe(cssmin())
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(rename({suffix:".min"}))
    .pipe(dest('css/'));
}






exports.default = function() {
    // You can use a single task
    // getReady()
    watch('sass/*.sass', getCSS);

    // watch('dist/*.js', getJs);


    // Or a composed task
    // watch(['dist/*.js', '*.html'], series(copyHtml, copyCss, getJs));
  };