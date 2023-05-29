const express = require('express');
const app = express();

app.listen(8080, () => 
    console.log('listening on 8080')
);

app.use(express.static('****'));

app.get('/comp', (req, res) => 
    res.sendFile('****')
);