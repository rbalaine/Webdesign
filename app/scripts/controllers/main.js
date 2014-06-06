'use strict';

angular.module('webdesignApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.arrondissement = [
    {name:'01'},
    {name:'02'},
    {name:'03'},
    {name:'04'},
    {name:'05'},
    {name:'06'},
    {name:'07'},
    {name:'08'},
    {name:'09'},
    {name:'10'},
    {name:'11'},
    {name:'12'},
    {name:'13'},
    {name:'14'},
    {name:'15'},
    {name:'16'},
    {name:'17'},
    {name:'18'},
    {name:'19'},
    {name:'20'}
  ];

  $scope.map = {
    center: 
    {
        latitude: 48.853,
        longitude: 2.35
    },
    zoom: 12
  };

  $scope.mapDemo = {
    center: 
    {
        latitude: 48.853,
        longitude: 2.35
    },
    zoom: 12
  };

  var x=document.getElementById("demo");

  $scope.location=function() 
  {
    if (navigator.geolocation) 
    {
      navigator.geolocation.getCurrentPosition(showPosition);
    } 
    else 
    {
      alert("Geolocation is not supported by this browser.");
    }
  }

  $scope.locationDemo=function() 
  {
      $scope.latDemo = 48.867045;
      $scope.lngDemo = 2.320918;
      $scope.geo = {data:[$scope.lngDemo,$scope.latDemo]};

      $scope.mapDemo.center.latitude = $scope.latDemo;
      $scope.mapDemo.center.longitude = $scope.lngDemo;
      $scope.mapDemo.zoom = 16;

      $scope.requestDemo="http://public.opendatasoft.com/api/records/1.0/search?dataset=liste-des-boites-aux-lettres-paris&rows=10&facet=type&facet=commune&geofilter.distance=".concat($scope.latDemo).concat("%2C+").concat($scope.lngDemo).concat("%2C").concat("200");
      //console.log($scope.requestDemo);

      $http.get($scope.requestDemo).success(function(dataDemo)
      {
          //console.log(JSON.stringify(data.records));
          $scope.boiteDemo = dataDemo.records;
      }); 
  }


  function showPosition(position) 
  {
    //Récupération des coordonnées
    $scope.lat = position.coords.latitude;
    $scope.lng = position.coords.longitude;
    $scope.coor = {data:[$scope.lng,$scope.lat]};

    //Centre la carte sur la position
    $scope.map.center.latitude = $scope.lat;
    $scope.map.center.longitude = $scope.lng;
    if($scope.distance <= 1000)
    {
      $scope.map.zoom = 14;
    }
    else if(($scope.distance > 1000) && ($scope.distance < 8000))
    {
      $scope.map.zoom = 13;
    } 
    else if($scope.distance > 8000)
    {
      $scope.map.zoom = 12;
    } 
    //Recherche des boites aux lettres dans le rayon spécifié
    $scope.request="http://public.opendatasoft.com/api/records/1.0/search?dataset=liste-des-boites-aux-lettres-paris&rows=100&facet=type&facet=commune&geofilter.distance=".concat($scope.lat).concat("%2C+").concat($scope.lng).concat("%2C").concat($scope.distance);
    //console.log($scope.request);

    $http.get($scope.request).success(function(data2)
    {
        //console.log(JSON.stringify(data.records));
        $scope.boite = data2.records;
    });
  }

  $scope.getdata=function()
  	{
  		$scope.arr = "750".concat($scope.arr.name.toString());

  		$scope.ad1="http://public.opendatasoft.com/api/records/1.0/search?dataset=liste-des-boites-aux-lettres-paris&q=cp%3A".concat($scope.arr).concat("&rows=20&facet=type&facet=commune&facet=cp");
		
		$http.get($scope.ad1).success(function(data)
		{
  			//console.log(JSON.stringify(data.records));
  			$scope.result = data.records;
  			$scope.arr = {};
  	});
	}
  }).directive('bpDisplay',function()
  {return {templateUrl: 'views/bp.html',
      restrict: 'AEC'
    };
  });
