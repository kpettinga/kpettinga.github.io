---
layout: post
title: "React with Gulp and Webpack, a solution that works."
description: "Webpack is dominating the build system scene these days, but I'm not ready to give up on Gulp quite yet."
status: publish
tags: [gulp, webpack, javascript, es6, react]
---

Webpack is becoming the obvious solution for bundling assets in the world of code modularity. But I still find myself not wanting to leave Gulp behind for all my non-javascript related tasks (sass, image minification, etc). I just _know_ Gulp and build system solutions seem to be a dime a dozen these days. Plus, Webpack's documentation isn't the most user friendly. Ultimately, I realized that I only want what Webpack does best: bundle my javascript in all its forms. Gulp is capable of this but it's fairly complicated to setup and Webpack does it out of the box. 

So, after a long and winding road, I think I've found a decent solution with `webpack-stream`. The following code will show you how I configure Webpack to compile React .jsx files using Gulp. 

Before we get started, this is the assumed directory structure of our project:

```
my-project/
  build/ 
  src/
    js/
      index.jsx
  gulpfile.js
  index.html
  package.json
  webpack.config.js
```

## Step 1: Install dependencies

Here's what we're going to use:

**React**    
- react
- react-dom

**Webpack**    
- webpack-stream

**ES6 transpiling**    
- babel-core
- babel-loader
- babel-plugin-transform-runtime
- babel-polyfill
- babel-preset-es2015
- babel-preset-react
- babel-preset-stage-0
- babel-runtime

**Gulp**    
- gulp
- gulp-livereload
- gulp-notify
- gulp-sourcemaps

**server stuff**    
- http
- st

Run these commands to install the packages:

```shell
npm install --save react react-dom
```

```shell
npm install --save-dev babel-core babel-loader babel-plugin-transform-runtime babel-polyfill babel-preset-es2015 babel-preset-react babel-preset-stage-0 babel-runtime gulp gulp-livereload gulp-notify gulp-sourcemaps http json-loader react-hot-loader st webpack-stream
```

## Step 2: Configure Webpack

Copy/paste the code below into the `webpack.config.js` file in the root of your project:

```javascript
var	path = require('path'), 
  webpack = require("webpack"),
  PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
  };

module.exports = {
  devtool: 'eval-source-map',
  entry: ['babel-polyfill','./src/js/index.jsx'],
  output: {
  path: PATHS.build,
  filename: 'build.min.js'
  },
  module: {
  loaders: [
    {
    loader: 'babel-loader',
    include: [
      path.resolve(__dirname, "src/js"),
    ],
    test: /\.(js|jsx|es6)$/,
    exclude: /(node_modules|bower_components)/,
    query: {
      plugins: ['transform-runtime'],
      presets: ['es2015', 'react'],
    }
    }
  ]
  },
  resolve: {
  extensions: ['', '.js', '.jsx']
  },
  plugins: [
  new webpack.DefinePlugin({
    'process.env': {
    NODE_ENV: JSON.stringify('"production"')
    }
  }),
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin()
  ]
};
```

## Step 3: Configure Gulp

Copy/paste the code below into `gulpfile.js` in the root of your project:

```javascript

// Packages

var gulp          = require('gulp'),	
    sourcemaps    = require('gulp-sourcemaps'),
    notify        = require('gulp-notify'),
    webpackConfig = require("./webpack.config.js"),
    stream        = require('webpack-stream'),
    livereload    = require('gulp-livereload'),
    http          = require('http'),
    st            = require('st');

// Paths

var path = {
      scripts: {
        src: ['src/**/*.jsx', 'src/**/*.js'],
        dest: 'build/js'
      }
    };

// Task Options

var options = {
      livereload: { 
        basePath: 'build' 
      },
      server: {
        st: { 
          path: __dirname + '/', 
          index: 'index.html', 
          cache: false 
        },
        port: 8080
      }
};

gulp.task( 'webpack', function() {
  return gulp.src( path.scripts.src )
    .pipe( sourcemaps.init() )
    .pipe( stream( webpackConfig ) )
    .pipe( sourcemaps.write() )
    .pipe( gulp.dest( path.scripts.dest ) )
    .pipe( livereload() )
    .pipe( notify( { message: 'webpack task complete' } ) );
});

gulp.task( 'watch', ['server'], function() {
  livereload.listen( options.livereload );
  gulp.watch( path.scripts.src, ['webpack'] );
  // list any other watch tasks you want for sass, images, etc.
});

gulp.task( 'server', function( done ) {
  http.createServer(
    st( options.server.st )
  ).listen( options.server.port, done );
});

// Setup the default task
gulp.task( 'default', ['webpack', 'watch'] );
```

And that's it! Now just run `gulp` and your javascript will bundle into /build/js/, a local server will fire up at localhost:8080, and your files will be watched for changes.

From here, you're free to add any other gulp tasks you like for things like sass, image compression, whatever. 

---

Maybe this is just a transitional phase until the day I fully adpot Webpack but, until then Gulp is still king for me.