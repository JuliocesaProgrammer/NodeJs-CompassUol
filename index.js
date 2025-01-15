const fs = require('fs');
const http = require('http');





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

const server = http.createServer((req, res) =>{
    console.log(req)
    res.end("Hello From the server!");
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests... on port 8000');
})



