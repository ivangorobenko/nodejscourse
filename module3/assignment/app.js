const http = require("http");

const handleRequests = require('./routes')

const server = http.createServer(handleRequests);

server.listen(3000, 'localhost', () => {
    console.log('Server is up and running !')
})
