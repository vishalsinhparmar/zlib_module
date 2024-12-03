const fs = require('fs');
const zlib = require('zlib');

const unGip = zlib.createGunzip();

 const readstreamFile = fs.createReadStream('zipfile.txt.gz');
 

 const writableStreamFIle = fs.createWriteStream('34mb.txt');

 readstreamFile.on('data', chunk=> console.log('the uncoprressed data',chunk.length));
 unGip.on('data', chunk => console.log('the unzip data is',chunk.length));
 writableStreamFIle.on('finish',()=>console.log('the cretefileda 34mb.txt'))

 readstreamFile.pipe(unGip).pipe(writableStreamFIle);

 writableStreamFIle.on('close',()=>{
    console.log('the unzip is successfuly converted')
 })

