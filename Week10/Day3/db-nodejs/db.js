const knex = require('knex');

const db = knex({
    client:'pg',
    connection:{
        host: 'localhost',
        port: '5432',
        user: 'postgres',
        password: '12345678',
        database: 'dvdrental',
    }
})

// db .select('city', 'city_id')
// .from('city')
// .then(rows =>{
//     console.log(rows);
// })
// .catch(err=>{
//     console.log(err);
// })

// db('city')
// // .select('city', 'city_id')
// // .update({city:'Tel-Aviv'})
// .where({city_id:'101'})
// .returning('*')
// .from('city')
// .then(rows =>{
//     console.log(rows);
// })
// .catch(err=>{
//     console.log(err);
// })


// db('country')
// .select('*')
// .where({country:'Israel'})
// .then(rows =>{
//     console.log(rows);
// })
// .catch(err=>{
//     console.log(err);
// })

// insert new rows to db
db('country')
.insert([
    {country:'Di Learning'}
])
// .select('*')
// .where({country:'Israel'})
.then(rows =>{
    console.log(rows);
})
.catch(err=>{
    console.log(err);
})