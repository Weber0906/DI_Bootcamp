const express = require('express');

const app = express();

app.listen(3001, () => {
    console.log('run on port 3001');
})

// console.log(__dirname);

// app.arguments('/', express.static())

app.use('/', express.static(__dirname + '/public'))

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.get('/aboutMe/:hobby', (req, res) => {
    const hobby = req.params.hobby
    if(isNaN(hobby)){
        return res.status(200).send(`This id my hobby: ${hobby}`)
    } 
    res.status(404).send('hobby')
})

app.get('/pic', (req, res) => {
    res.sendFile(__dirname+'/public/images/web-1.png')
})

app.get('/form', (req, res) => {
    res.sendFile(__dirname+'/public/form.html')
})

app.get('/formData', (req, res) => {
    console.log(req.query);
    res.send(`${req.query.email} sent you a ${req.query.message}`)
})
app.post('/formData', (req, res) => {
    console.log(req.query);
    res.send(`${req.query.email} sent you a ${req.query.message}`)
})