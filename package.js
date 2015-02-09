Package.describe({
  summary: "Ionic framework packaged for Meteor.",
  version: "0.3.0",
  git: "https://github.com/Urigo/meteor-ionic.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@0.9.0.1');

  api.use('urigo:angular@0.6.5', 'client', {weak: true});

  api.use([
    'fastclick@1.0.2'
  ], 'client', {weak : true});

  // Fix icons to absolute path
  api.addFiles([
    'lib/css/ionic.css',
    'lib/fonts/ionicons.eot',
    'lib/fonts/ionicons.svg',
    'lib/fonts/ionicons.ttf',
    'lib/fonts/ionicons.woff',
    'lib/js/ionic.bundle.js',
  ], 'client');

  // Stop Meteor's Fastclick for Ionic one
  api.addFiles('override-fastclick.js', 'client');
});
