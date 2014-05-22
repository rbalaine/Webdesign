'use strict';

angular.module('webdesignApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  var getdata=function(){
		$http.get("http://public.opendatasoft.com/api/records/1.0/search?dataset=liste-des-boites-aux-lettres-paris&rows=1838&facet=type&facet=commune").success(function(data){
  		console.log(JSON.stringify(data));
  		$scope.data = data;
  	});}

		

  	$http.get("http://public.opendatasoft.com/api/records/1.0/search?dataset=liste-des-boites-aux-lettres-paris&rows=1838&facet=type&facet=commune").success(function(data2){
  		console.log(JSON.stringify(data2));
  		$scope.data2 = data2;
  	});

  	getdata();

  });
