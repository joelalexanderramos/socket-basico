var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// los ON son escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});


// Los emit son para enviar informacion
socket.emit('enviarMensaje', {
    //usuario: 'Joel',
    message: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);

});