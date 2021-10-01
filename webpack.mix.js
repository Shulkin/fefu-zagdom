const mix = require('laravel-mix');

mix
    .setPublicPath('public')
    .js('resources/scripts/main.js', 'build/bundle.js')
    .sass('resources/styles/main.scss', 'build/bundle.css')
    .browserSync({
        proxy: 'localhost',
        files: ['resources/**/*'],
    });