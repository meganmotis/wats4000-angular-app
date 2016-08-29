"use strict";angular.module("wats4000AngularAppApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngStorage","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/current/:cityID",{templateUrl:"views/current.html",controller:"CurrentCtrl",controllerAs:"current"}).when("/forecast/:cityID",{templateUrl:"views/forecast.html",controller:"ForecastCtrl",controllerAs:"forecast"}).otherwise({redirectTo:"/"})}]),angular.module("wats4000AngularAppApp").controller("MainCtrl",["$scope","citysearch","$localStorage",function(a,b,c){a.citiesFound=b.find(),a.storage=c,a.findCities=function(){a.citiesFound=b.find({query:a.location}),a.searchQuery=a.location}}]),angular.module("wats4000AngularAppApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("wats4000AngularAppApp").factory("current",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/weather?id=:cityID&units=imperial&APPID=e4ee4b46e97613602c84924cc1b9f629",{},{query:{method:"GET",params:{cityID:"5809844"},isArray:!1}})}]),angular.module("wats4000AngularAppApp").factory("citysearch",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/find?q=:query&units=imperial&type=like&mode=json&APPID=e4ee4b46e97613602c84924cc1b9f629",{},{find:{method:"GET",params:{query:"seattle"},isArray:!1}})}]),angular.module("wats4000AngularAppApp").controller("CurrentCtrl",["$scope","$routeParams","current","$localStorage",function(a,b,c,d){a.cityID=b.cityID,a.currentWeather=c.query({cityID:b.cityID}),a.saveCity=function(b){var c={name:b.name,id:b.id};if(d.savedCities){for(var e=!0,f=0;f<d.savedCities.length;f++)d.savedCities[f].id==c.id&&(e=!1);1==e?(d.savedCities.push(c),a.citySaved={success:!0}):(console.log("city already saved"),a.citySaved={duplicate:!0})}else d.savedCities=[c]}}]),angular.module("wats4000AngularAppApp").factory("forecast",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=5&units=imperial&APPID=e4ee4b46e97613602c84924cc1b9f629",{},{query:{method:"GET",params:{cityID:"5809844"},isArray:!1}})}]),angular.module("wats4000AngularAppApp").controller("ForecastCtrl",["$scope","$routeParams","forecast",function(a,b,c){a.cityID=b.cityID,a.forecastData=c.query({cityID:b.cityID})}]),angular.module("wats4000AngularAppApp").run(["$templateCache",function(a){a.put("views/about.html",'<h1>About</h1> <p>The Weather Cats App was created with AngularJS using the OpenWeatherMap API by Megan Otis as a final project for WATS 4000, part of the <a href="webdev.seattleu.edu">Web Development Certificate program</a> at <a href="www.seattleu.edu">Seattle University</a>.</p> <p>Megan, a novice web developer and cat-loving Seattelite, faithfully checks the weather forecast each morning while snuggled in bed with her two kitties, Xena and Loki.</p>'),a.put("views/current.html",'<h1>Current Conditions for {{currentWeather.name}}</h1> <div ng-messages="citySaved"> <p class="city-saved-alert bg-success text-success" ng-message="success"> {{currentWeather.name}} has been saved to your list of cities. </p> <p class="city-saved-alert bg-warning text-warning" ng-message="duplicate"> {{currentWeather.name}} has already been saved to your list of cities. </p> </div> <dl> <dt>Currently</dt> <dd>{{currentWeather.weather[0].main}}</dd> <dd>{{currentWeather.weather[0].description}}</dd> <dt>Temperature</dt> <dd>{{currentWeather.main.temp}} &deg;F</dd> <dt>Wind</dt> <dd>{{currentWeather.wind.speed}} mph at {{currentWeather.wind.deg}} &deg;</dd> <dt>Clouds</dt> <dd>{{currentWeather.clouds.all}}%</dd> </dl> <p><button class="btn btn-lg btn-primary" ng-click="saveCity(currentWeather)">Save City</button></p> <p><a ng-href="#/forecast/{{cityID}}" class="btn btn-lg btn-primary">View 5-day Forecast</a></p>'),a.put("views/forecast.html",'<h1>5-Day Forecast for {{forecastData.city.name}} {{forecastData.city.country}}</h1> <dl ng-repeat="prediction in forecastData.list" class="weather-forecast"> <dt>Forecast for {{prediction.dt*1000 | date:\'MMM dd, yyyy\'}}</dt> <dd>{{prediction.weather[0].main}}</dd> <!-- <dd ng-if="prediction.weather[0].main=\'sunny\'"><img src="images/sunnycat.jpg></dd> --> <dd>{{prediction.weather[0].description}}</dd> <dt>Temperature</dt> <dd>Min: {{prediction.temp.min}} &deg;F Max: {{prediction.temp.max}} &deg;F</dd> <hr> </dl> <p><a ng-href="#/current/{{cityID}}" class="btn btn-lg btn-primary">View Current Weather</a></p> <p><a href="#/" class="btn btn-lg btn-primary">Home</a></p>'),a.put("views/main.html",'<div ng-app class="jumbotron" ng-controller="MainCtrl"> <h1>Weather Cats</h1> <img class="img-responsive" src="images/home-cat.956b990c.jpg" alt="cat looking out the window"> <h3>Enter a Location</h3> <p class="lead"> <div ng-init="location=\'Seattle\'"> <p> <label for="location">Location: <input type="text" name="location" ng-model="location"> </label> </p> <p> <button class="btn btn-lg btn-primary" ng-click="findCities()">Find</button> </p> </div> <div ng-if="searchQuery"> <p class="lead">{{citiesFound.count}} cities found matching the query: {{searchQuery}}.</p> <dl ng-repeat="city in citiesFound.list"> <dt>{{city.name}}, {{city.sys.country}}</dt> <dd>{{city.weather[0].main}} - {{city.weather[0].description}}</dd> <dt>Temperature</dt> <dd>{{city.main.temp}} &deg;F</dd> <dd><a ng-href="#/current/{{city.id}}" class="btn btn-lg btn-primary">How\'s the Weather?</a></dd> </dl> </div> <div ng-if="storage.savedCities"> <h3>Saved Cities</h3> <ul class="saved-cities-list"> <li ng-repeat="city in storage.savedCities"> <a ng-href="#/current/{{city.id}}" class="btn btn-lg btn-primary">{{city.name}}</a> </li> </ul> </div> </p> </div>')}]);