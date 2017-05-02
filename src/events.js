var seneca = require('seneca')();
seneca.use( './services/add.js' );

module.exports = function(socket) {
	socket.on('clientEvent', function(data){
		seneca.act( { role: 'process', cmd: 'sum', numbers: [ 1, 2, 3] }, function ( err, result ) {
		  socket.emit('testerEvent', result);;
		})
	});
	socket.on('disconnect', function () {
	    console.log('A user disconnected');
  	});
	return socket;
}
