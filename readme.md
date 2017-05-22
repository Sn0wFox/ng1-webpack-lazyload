# AngularJS + Webpack + lazyload

## Run it
```shell
npm start
```

## How to
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
    // Now  we need to import files in .js where we need it
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

## Known issues
* Sourcemaps don't work on Firefox... Mainly because of babel and Firefox itself.
Nevertheless, it still works on Chrome for dev.