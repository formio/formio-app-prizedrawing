!function(){"use strict";angular.module("formioPrizeDrawing",["ngSanitize","ui.router","ui.bootstrap","formio"]).config(["$stateProvider","$urlRouterProvider","FormioProvider","AppConfig",function(o,r,t,e){t.setBaseUrl(e.apiUrl),o.state("register",{url:"/",templateUrl:"views/register.html",controller:["$scope","$state","$rootScope",function(o,r,t){o.$on("formSubmission",function(o,t){t&&r.go("done")})}]}).state("done",{url:"/done",templateUrl:"views/done.html"}).state("login",{url:"/login",templateUrl:"views/login.html",controller:["$scope","$state","$rootScope",function(o,r,t){o.$on("formSubmission",function(o,e){e&&(t.isAdmin=!0,localStorage.setItem("admin",1),t.user=e,r.go("drawing"))})}]}).state("drawing",{url:"/drawing",templateUrl:"views/drawing.html",controller:["$scope","$http","$rootScope","$state","Formio",function(o,r,t,e,n){return t.user?(o.winner=null,o.loading=!1,void(o.draw=function(){o.loading=!0;var e=t.registerForm+"/export?x-jwt-token="+n.getToken(),i=10;setTimeout(function(){r.get(e).then(function(r){o.loading=!1;var t=r.data.length,e=Math.floor(Math.random()*t);o.winner=r.data[e]})},i)})):void e.go("register")}]}),r.otherwise("/")}]).run(["$rootScope","AppConfig","Formio","$state",function(o,r,t,e){o.user=null,o.adminLoginForm=r.appUrl+"/admin/login",o.registerForm=r.appUrl+"/prize",o.user||t.currentUser().then(function(r){o.user=r});var n=function(){o.user=null,e.go("register")},i=function(){o.user=null,e.go("register")};o.$on("formio.sessionExpired",i),o.$on("formio.unauthorized",n),o.logout=function(){t.logout().then(function(){o.user=null,e.go("register")})["catch"](i)},o.isActive=function(o){return-1!==e.current.name.indexOf(o)}}])}(),angular.module("formioPrizeDrawing").constant("AppConfig",{appUrl:"http://prizedrawing.localhost:3000",apiUrl:"http://api.localhost:3000"});