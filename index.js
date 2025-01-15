const fs = require('fs');
const http = require('http');
const url = require('url');





////////////////////////////////////////
//Files




//Blocking, synchronous way
// const textIn = fs.readFileSync('./complete-node-bootcamp/1-node-farm/starter/txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about avocado: ${textIn}.\n Created on ${Date.now()}`;

// fs.writeFileSync('./complete-node-bootcamp/1-node-farm/starter/txt/output.txt', textOut);

// console.log('File created and written.');

//Non-blocking, asynchronous way
// fs.readFile('./complete-node-bootcamp/1-node-farm/starter/txt/start.txt', 'utf-8', (err, data1) => {
//     fs.readFile(`./complete-node-bootcamp/1-node-farm/starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile(`./complete-node-bootcamp/1-node-farm/starter/txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3);

//         fs.writeFile("./complete-node-bootcamp/1-node-farm/starter/txt/final.txt", `${data2}\n${data3}`, 'utf-8', err =>{
//             console.log("sua pasta foi escrita")
//         })
//        });
// });
// })
// console.log('File reading started...');


/////////////////////////////

//Sever
const data = fs.readFileSync('./complete-node-bootcamp/1-node-farm/final/dev-data/data.json', 'utf-8');
const dataObject = JSON.parse(data);

const server = http.createServer((req, res) =>{
    const pathName = req.url

    if (pathName === '/' || pathName === '/overview'){
        res.end('Tihs is the overview')
    }else if (pathName === '/product'){
        res.end('Tihs is the product')
    } else if(pathName === '/api'){
        res.writeHead(200, {'content-type': 'application/json'})
        res.end(data);
    } else{
        res.writeHead(404,{ 
         'Content-type':  'text/html',
         "My-own-Header": 'Hello-world'
        })  //status code 404
        res.end('<h1>Page Note Found!</h1>')
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests... on port 8000');
});