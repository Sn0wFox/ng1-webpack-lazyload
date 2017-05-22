# AngularJS + Webpack + lazyload

## Run it
```shell
npm start
```

## How to
### Use source maps
* With Firefox
    1. Make sure to have a version 50+ installed
    2. Go to the url `about:config`
    3. Set `devtools.sourcemap.locations.enabled` to `true`.
    
* With Chrome
    It works with version `58.0.3029.110 (64-bit)`, and probably all 50+.
    
* With Opera
    It works with version `45.0.2552.812`, and probably all 40+.

* With Safari
    Safari doesn't seems to like evaluated source maps. However, `.js.map` are fine.
    Just be sure to work with `source-map` and not `eval-source-maps`.

### Import files
* Without webpack (old stuff):
    ```html
    <!--index.html-->
    <script src="src/vendor/intl-tel-input/build/js/intlTelInput.js"></script>
    <script src="src/vendor/intl-tel-input/lib/libphonenumber/build/utils.js"></script>
    <script src="src/vendor/greensock-js/src/minified/plugins/ScrollToPlugin.min.js"></script>
    <!--...and hundred others-->
    ```

* With webpack (now):
    ```html
    <!--index.html-->
    <script src="dist/app.js"></script>
    <!--...and that's it-->
    ```
    
    ```js
    // Now  we need to import files in .js only where we need it
    import angular  from 'angular';                     // Angular is imported here and not in the html
    import uiRouter from 'angular-ui-router';           // Same for needed other modules (from npm, bower one is legacy)
    import view1    from'./view1/view1';                // A needed static module
    
    // ... and then use it
    ```

### Define split point (lazy load chunks)
* Without webpack (old stuff): oops, not really.
* With webpack (now):
    ```js
    import('my/super/lazyloaded/thing').then(() => {
      // use it
    });
    ```
    Everything needed by the imported file will be loaded in a separate chunk,
    and loaded on demand only.
    
    For more, see `app/view2` folder.
    
## Make it scale
**Webpack is power.**

Using webpack means being able to work with the latest technologies,
giving that a loader exists for it.
It also means being able to build an ap as modular as possible.

Sass ? Use `sass-loader`. Pug ? Use `pug-loader`. ES7 ? Use another babel preset.
Minimify ? Uglify ? Extract CSS ? Just use one of the [available plugins](https://github.com/webpack/docs/wiki/list-of-plugins),
or write your own.

## Known issues
* Source maps are broken in several places: Chrome, Firefox, Babel...
*Fortunately*, using the last versions of these tools with the basic source maps
for prod (`source-map`, `.js.map` generated files) and for dev
(`eval-source-map`, inline and evaluated) works.

* Safari doesn't like evaluated source maps, for some reasons.
Be sure to work with `source-map` and not `eval-source-maps`.