// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,

    preprocessors: {
      '**/*.haml': ['ng-haml2js']
    },

    files: [
      '*.js',
      '*.html',
      // if you wanna load template files in nested directories, you must use this
      '**/*.haml'
    ],

    ngHaml2jsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'public/',
      // prepend this to the
      prependPrefix: 'served/',

      // or define a custom transform function
      cacheIdFromPath: function (filepath) {
        return cacheId;
      },

      // setting this option will create only a single module that contains templates
      // from all the files, so you can load them all with module('lynxi-ui')
      moduleName: 'lynxi-ui'
    }
  });
};
