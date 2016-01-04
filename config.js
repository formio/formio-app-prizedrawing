var APP_URL = 'http://oentoewywpwrihd.localhost:3000';
var API_URL = 'http://api.localhost:3000';

// Parse query string
var query = {};
location.search.substr(1).split("&").forEach(function(item) {
    query[item.split("=")[0]] = item.split("=")[1] && decodeURIComponent(item.split("=")[1]);
});

angular.module('formioPrizeDrawing').constant('AppConfig', {
  appUrl: query.appUrl || APP_URL,
  apiUrl: query.apiUrl || API_URL,
  adminLoginPath: 'admin/login',
  drawingFormPath: 'prize'
});
