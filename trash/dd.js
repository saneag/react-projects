var fs = require('fs'),
    request = require('request');
const cars = require('./cars.json')

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(`./cars-v2/client/src/assets/cars/${filename}`)).on('close', callback);
  });
};

download('https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Lexus_LX_570_%28URJ201W%29_IMG_4913.jpg/1280px-Lexus_LX_570_%28URJ201W%29_IMG_4913.jpg', `Lexus LX 570`, function(){console.log('done')})
