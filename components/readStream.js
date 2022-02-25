const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/myFile.txt`);
ourReadStream.on('data', (chunk) => {
    console.log(chunk);
});

console.log('hello');
