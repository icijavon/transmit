var app = angular.module("myApp", []); 
app.controller("myCtrl", function($scope) {
    $scope.socket = io.connect('http://localhost:3000/');
    $scope.test = function() {
  		$scope.socket.emit('clientEvent', 'Sent an event from the client!');
    }
  	$scope.socket.on('testerEvent', function(data){
  		document.write(data.result)
  	});

});


