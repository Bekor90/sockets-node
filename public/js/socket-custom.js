var socket = io();
        //on son para escuchar
    	socket.on('connect', function(){
    		console.log('Conectado al servidor');
    	});

    	socket.on('disconnect', function() {

    		console.log('Se perdió conexion con el servidor');
    	});

        //emit para enviar informacion
        socket.emit('enviarMensaje', {
            usuario: 'John',
            mensaje: 'Hola mundo'
        }, function(resp){
            console.log('respuesta server:', resp);
        });

        //escuchar informacion
        socket.on('enviarMensaje', function(mensaje) {
            console.log('servidor', mensaje);
        });