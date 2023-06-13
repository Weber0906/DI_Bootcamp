const fs = require('fs');

const fs1 = require('fs').promises

const start = async() => {
    const data = await fs1.readFile('hello.txt', 'utf-8');
    console.log(data)
}
start()
// sync file
// try{
//     const data = fs.readFileSync('info', 'utf-8');
//     console.log(data)
// }
// catch(e){
//     console.log(e.message)
// }

// console.log('the file has ben read')

// acync file

// fs.readFile('info', 'utf-8', (err, data) => {
//     if(err){
//         console.log(err);
//     } else{
//         console.log(data);
//     }
// })
// console.log('async function worked')


// fs.appendFile('hello.txt', 'Hello there' ,'utf-8', (err)=> {
//     if(err) {
//         console.log(err)
//     }
// })

// fs.copyFile('hello.txt', 'hello', (err) => {
//     if(err){
//         console.log(err)
//     }
//     console.log('file copied')
// })

// delete file
// fs.unlink('hello', (err)=> {

// })