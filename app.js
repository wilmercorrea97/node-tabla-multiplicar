const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');

require('colors');

console.clear();

crearArchivo( argv.base, argv.listar, argv.hasta )
    .then( nombreArchivo => console.log( nombreArchivo, 'creado'.green ) )
    .catch( err => console.log( err ) );