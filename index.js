const fs = require('fs');

const textIn = fs.readFileSync('./complete-node-bootcamp/1-node-farm/starter/txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we know about avocado: ${textIn}.\n Created on ${Date.now()}`;

fs.writeFileSync('./complete-node-bootcamp/1-node-farm/starter/txt/output.txt', textOut);

console.log('File created and written.');