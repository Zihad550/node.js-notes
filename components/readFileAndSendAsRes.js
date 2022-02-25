const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const readStream = fs.createReadStream('./myFile.txt', 'utf8');
    readStream.pipe(res);
});

// on which port we are running
server.listen(8000);
console.log('running at port 8000');
