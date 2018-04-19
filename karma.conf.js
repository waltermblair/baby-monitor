//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
        'bower_components/angular/angular.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'components/**/*.js',
        'app.module.js',
        'app.config.js',
        'activity-log/activity-log.module.js',
        'activity-log/activity-log.component.js',
        'activity-log/*.js',
        'activity-detail/activity-detail.module.js',
        'activity-detail/activity-detail.component.js',
        'activity-log/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    preprocessors: {
      '{activity-detail,activity-log}/!(*spec).js': ['coverage'],
    },

    reporters: ['dots', 'coverage'],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-coverage'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
