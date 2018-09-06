const { io } = require('../server');


io.on('connection', (client) => {

	console.log('Usuario conectado');

	client.emit('enviarMensaje', {
		usuario: 'Admin',
		mensaje: 'Bienvenido'
	});

	client.on('disconnect', () => {

		console.log('Usuario desconectado');
	});

	client.on('enviarMensaje', (mensaje, callback) => {

		console.log(mensaje);

		client.broadcast.emit('enviarMensaje', mensaje);	
		
	});
});