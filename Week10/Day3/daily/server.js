const express = require('express');

const app = express();

app.listen(3001, () => {
    console.log('run on port 3001');
})

// console.log(__dirname);

// app.arguments('/', express.static())

app.use('/', express.static(__dirname + '/public'))

app.get('/aboutMe/:hobby', (req, res) => {
    const hobby = req.params.hobby
    if(isNaN(hobby)){
        return res.status(200).send(`This id my hobby: ${hobby}`)
    } 
    res.status(404).send('hobby')
})