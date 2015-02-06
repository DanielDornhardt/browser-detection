Package.describe({
    "name": "awatson1978:browser-detection",
    "summary": "Meteorite package that provides browser detection.",
    "homepage": "https://github.com/awatson1978/browser-detection",
    "author": "Abigail Watson  (http://www.pentasyllabic.com)",
    "version": "1.0.5",
    "git": "https://github.com/awatson1978/browser-detection.git"
});

Package.onUse(function (api) {
    api.versionsFrom('1.0.2.1');
    api.export('BrowserDetect');

    api.addFiles('browser-detection.js', "client");
});
