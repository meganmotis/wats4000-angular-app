"use strict";angular.module("wats4000AngularAppApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("wats4000AngularAppApp").controller("MainCtrl",["$scope","current",function(a,b){a.current=b.query(),a.refreshCurrent=function(){a.current=b.query({location:a.location})}}]),angular.module("wats4000AngularAppApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("wats4000AngularAppApp").factory("current",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=e4ee4b46e97613602c84924cc1b9f629",{},{query:{method:"GET",params:{location:"Seattle,us",bogus:null},isArray:!1}})}]),angular.module("wats4000AngularAppApp").run(["$templateCache",function(a){a.put("views/about.html",'<p>Rest in peace, Prince.</p> <h3>Now, let\'s add some numbers!</h3> <div ng-app ng-init="firstnum=1;secondnum=2"> <input type="number" min="0" ng-model="firstnum"> plus <input type="number" min="0" ng-model="secondnum"> equals <b>{{firstnum + secondnum}}</b> </div>'),a.put("views/main.html",'<div ng-app class="jumbotron" ng-controller="MainCtrl"> <h1>Weather for {{current.name}}</h1> <p class="lead"> <div ng-init="location=\'Seattle\'"> <p> <label for="location">Location: <input type="text" name="location" ng-model="location"> </label> </p> <p> <button class="btn btn-lg btn-primary" ng-click="refreshCurrent()">Get Current Weather</button> </p> <dl> <dt>Currently</dt> <dd>{{current.weather[0].main}}</dd> <dd>{{current.weather[0].description}}</dd> <dt>Temperature</dt> <dd>{{current.main.temp}}</dd> <dt>Wind</dt> <dd>{{current.wind.speed}} mph at {{current.wind.deg}} degrees</dd> <dt>Clouds</dt> <dd>{{current.clouds.all}}%</dd> </dl> </div> </p> </div>')}]);