const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();

const readstream = fs.createReadStream('myfile.txt');
const writableStream = fs.createWriteStream('zipfile.txt.gz')

readstream.on('data',chunk => console.log('the compresseed data is',chunk.length));
gzip.on('data',chunk => console.log('the comprased data are gzipdata is', chunk.length));
writableStream.on('finish',()=> console.log('compression are finish'))

readstream.pipe(gzip).pipe(writableStream);

writableStream.on('finish',()=>{
    console.log('file comprased are finished')
 });

//  const unGip = zlib.createGunzip();

//  const readstreamFile = fs.createReadStream('zipfile.json');
//  const writableStreamFIle = fs.createWriteStream('34mb.json');

//  readstreamFile.pipe(unGip).pipe(writableStreamFIle);

//  writableStream.on('close',()=>{
//     console.log('the unzip is successfuly converted')
//  })

