let mix = require('laravel-mix');

mix.js('src/app.js', 'js').vue({ version: 2 }).sass('src/app.scss', 'css')
/* per lavorare su url image css */
.options({
    processCssUrls: false
 })
/* //per lavorare su url image css */

.setPublicPath('dist');
mix.copyDirectory('src/img', 'dist/img')

