const argv = require('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe:'Es la base de la tabla de multiplicar'
                    })
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        describe:'Muestra la tabla en consola',
                        default: false
                    })
                    .option('h', {
                        alias: 'hasta',
                        type: 'number',
                        describe:'Este es el número hasta donde quieres la tabla',
                        default: 10
                    })
                    .check( (argv, options)  => {
                        if ( isNaN( argv.base ) ) {
                            throw 'La base tiene que ser un número'
                        } 
                        return true;
                    })  
                    .argv;

module.exports = argv;