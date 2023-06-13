const express = require('express');
const {products} = require('./config/data.js');

const app = express();

const logger = (req, res, next) => {
    console.log('url=>', req.url);
    console.log('params=>', req.params);
    console.log('query=>', req.query);
    console.log('body=>', req.body);
    next()
}

const auth = (req, response, next) => {
    const user = req.query.user;
    if (user === 'admin') {
        next()
    }
    else {
        res.status(401).send('unauthorized')
    }
}

app.use('/products', logger)
app.use('/products', auth)
app.use(express.urlencoded({extended:true}));
app.use(express.json())


app.listen(6001, () => {
    console.log('server is running on port 6001');
});

// http://localhost:6001/products
app.get('/products', auth, (req, res) => {
    res.send(products)
})

app.get('/products/:product_id', (req, res) => {
    console.log(req.params);
    const id = req.params.product_id;
    const product = products.find(item => item.id == id);
    if (!product) {
        return res.status(404).json({message: 'Product not found'})
    }
    res.json(product)
})

app.get('/products/:product_name', (req, res) => {
    const productName = req.params.product_name;
    const product = products.find(p => p.name.toLowerCase().includes(productName.toLowerCase()));

    if (product) {
        res.send(product);
    } else {
        res.status(404).send('Product not found');
    }
});

app.post('/products', (req, res) => {
    products.push(req.body);
    res.status(201).json(products)
    
    res.send('ok from post')
})

app.put('/products/:product_id', (req, res) => {
    const id = req.params.product_id;
    const index = products.findIndex(item => item.id == id)
    if (index === -1) {
        return res.status(404).json({message: 'not found'})
    }
    product[index] = {
        ...products[index],
        name:req.body.name,
        price:req.body.price,
    }
    res.status(200).json(products)
})
