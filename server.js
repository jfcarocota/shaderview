const express = require('express');
const app = express();
const fs = require('fs');
var cors = require('cors');
const figlet = require('figlet');
const port = 8000;

app.use(cors());

app.use('/src', express.static('src'));
 
app.get('/',  (req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.readFile('./index.htm', null, (error, data) => {
        if(error){
            res.writeHead(404);
            res.write('<h1>Page not found :( </h1>');
        }else{
            res.write(data);
        }
        res.end();
    });
});

app.listen(port, 
    figlet('ShaderView uwu', function(err, data) {
        if (err) {
            console.log('Something went wrong... unu');
            console.dir(err);
            return;
        }
        console.log(`Server listening on port: ${port}\n${data}`)
        console.log(`http://localhost:${port}`);
    })    
);