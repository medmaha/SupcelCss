const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function compiledStyles(){
    return src('./*.scss')
        .pipe(sass())
        .pipe(dest('../css'))
}

function watchSassChanges() {
    watch(['./*.scss', './**/*.scss'], compiledStyles)
}


exports.default = series(compiledStyles, watchSassChanges)
