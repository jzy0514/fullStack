const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();

var inFile = fs.createReadStream('./sample.txt');
var outFile = fs.createReadStream('./sample.txt.gz');
inFile.pipe(gzip).pipe(outFile);