const fs = require('fs');
// read stream
const ourReadStream = fs.createReadStream('./myFile.txt', 'utf8');
// write stream
const writeStream = fs.createWriteStream('./output.txt');

ourReadStream.on('data', (chunk) => {
    console.log(chunk);
    writeStream.write(chunk.toString());
});

// easy way write stream
// ourReadStream.pipe(writeStream);

console.log('hello');
