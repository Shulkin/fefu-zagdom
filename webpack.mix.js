const mix = require('laravel-mix');
const { resolve } = require('path');

mix
    .setPublicPath('public')
    .js('resources/scripts/main.js', 'build/bundle.js')
    .sass('resources/styles/main.scss', 'build/bundle.css', {}, [
        require('postcss-axis')
    ])
    .browserSync({
        proxy: 'localhost',
        files: ['resources/**/*'],
    })
    .vue();

mix.alias({'uikit-util': resolve(__dirname, 'node_modules/uikit/src/js/util')});
