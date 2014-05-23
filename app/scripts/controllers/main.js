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
