var Path = require('path');
var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();

server.views({
    engines: {
        html: require('handlebars')
    },
    relativeTo: __dirname,
    path: './views'
});

server.connection({ 
    host: 'localhost', 
    port: 7777
});

// Add the route
server.route({
    method: 'GET',
    path:'/', 
    handler: function (request, reply) {
       reply.view('index', { title: 'My home page' });
    }
});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'public',
            listing: true
        }
    }
});

// Start the server
server.start();