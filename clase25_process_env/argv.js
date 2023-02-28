import { Command } from 'commander'

const program = new Command()

program
    .option('-d', 'Variables para debug', false)
    .option('-p <port>', 'Puerdo del servicor', 8080)
    .option('--mode <mode>', 'Modo de trabajo', 'production')
    .requiredOption('-u <user>', 'User que usa el app', 'No se ha declarado un user')
    .option('-l, --letters [letters...]', 'Especificar letras')

program.parse()

console.log('Options: ', program.opts())
console.log('Valor de mode: ', program.opts().mode)
console.log('Datos no reconocibles: ', program.args)