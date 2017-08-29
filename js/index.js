var classApp= angular.module("weatherApp",[]);
classApp.controller("weatherCtrl", function($scope,$http){
  
  
  $scope.test={
    heading:"Welcome to Open Weather API",
    subheading:"Showing the current climatic conditions of the location"
  };
   
  $http.get("https://www.google.com").success(function(data){   
   
   
    $scope.lat=28.0374;
    $scope.lon=-82.3902;
    var apiKey="b69575f77bde10a7010486c78a2d0991";
    var openWeatherURL ="https://api.openweathermap.org./data/2.5/weather?lat="+$scope.lat+"&lon="+$scope.lon+"&appid="+apiKey;
  console.log(openWeatherURL);
  $http.get(openWeatherURL).success(function(data){
         console.log('openWeatherURL');
      
  $scope.description="Scattered Clouds";
    $scope.speed=(2.35*6.08)+" mph";    
  $scope.name="Temple Terrace";
    $scope.temp=(308.3)+" in Kelvin";
  
  $scope.ftemp=(308.3*(9/5)-459).toFixed(1)+" in Farenheit";
  $scope.ctemp=(308.3-273).toFixed(1)+" in Celcius";
    
  });
  
  });
  
  
});