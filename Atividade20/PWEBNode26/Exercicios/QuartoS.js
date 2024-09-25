const fs = require('fs');
const data = fs.readFileSync('file.txt');
//a execução é criada até aqui até o arquivo ser lido
console.log(data.toString());
