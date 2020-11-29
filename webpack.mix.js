const mix = require('laravel-mix');
const exec = require('child_process').exec;

require('dotenv').config();
require('laravel-mix-purgecss');
const glob = require('glob')
const purge = true;

function mixAssetsDir(query, cb) {
    (glob.sync('resources/' + query) || []).forEach(f => {
        f = f.replace(/[\\\/]+/g, '/');
        cb(f, f.replace('resources', 'public'));
    });
}

const sassOptions = {
    sourceMap: true,
};

// plugins Core stylesheets
mixAssetsDir('sass/pages/**/!(_)*.scss', (src, dest) => mix.sass(src, dest.replace(/(\\|\/)sass(\\|\/)/, '$1css$2').replace(/\.scss$/, '.css'), sassOptions).purgeCss());
// script js
mixAssetsDir('js/scripts/**/*.js', (src, dest) => mix.scripts(src, dest));
mixAssetsDir('js/**/*.js', (src, dest) => mix.scripts(src, dest));

/* VENDOR */
/*mixAssetsDir('vendors/js/!**!/!*.js', (src, dest) => mix.scripts(src, dest));
mixAssetsDir('vendors/css/!**!/!*.css', (src, dest) => mix.copy(src, dest).purgeCss({
    enabled: purge,
}));*/

mix.sass('resources/sass/app.scss', 'public/css')
    .purgeCss({
    enabled: purge,
});

