const express = require('express');
const app = express();

app.get('/', ()=>{
 res.send('docker and node app');
});

app.listen(3000, ()=>{
 console.log('app listening on port 3000.....')
});