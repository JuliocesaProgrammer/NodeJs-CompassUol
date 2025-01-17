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
const replaceTemplate = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);

    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    return output;
}

const tempOverview = fs.readFileSync('./complete-node-bootcamp/1-node-farm/final/templates/template-overview.html', 'utf-8');
const tempProduct = fs.readFileSync('./complete-node-bootcamp/1-node-farm/final/templates/template-product.html', 'utf-8');
const tempCard = fs.readFileSync('./complete-node-bootcamp/1-node-farm/final/templates/template-card.html', 'utf-8');

const data = fs.readFileSync('./complete-node-bootcamp/1-node-farm/final/dev-data/data.json', 'utf-8');
const dataObject = JSON.parse(data);

const server = http.createServer((req, res) =>{
    const pathName = req.url
//Overview page
    if (pathName === '/' || pathName === '/overview'){
        res.writeHead(200, {'content-type': 'text/html'});

        const cardsHtml = dataObject.map(el => replaceTemplate(tempCard, el)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml)
        res.end(output)

//Product page
    }else if (pathName === '/product'){
        res.end('Tihs is the product')
//API page
    } else if(pathName === '/api'){
        res.writeHead(200, {'content-type': 'application/json'})
        res.end(data);


//NOT FOUND page
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