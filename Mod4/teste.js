import { log } from 'console';
import readline  from 'readline';
import { createInterface } from 'readline';
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const propriedades = [];

// function obterEntrada() {
//   rl.question('Digite uma propriedade de CSS (ou "SAIR" para encerrar): ', entrada => {
//     if (entrada.toUpperCase() === 'SAIR') {
//       rl.close();
//     } else {
//       propriedades.push(entrada);
//       obterEntrada();
//     }
//   });
// }

// rl.on('close', () => {
//   const propriedadesOrdenadas = propriedades.sort();
//   console.log('\nPropriedades ordenadas de A-Z:');
//   propriedadesOrdenadas.forEach(propriedade => {
//     console.log(propriedade);
//   });
//   process.exit(0);
// });

// obterEntrada();

class ListasCSS {
  constructor(){
    this.propriedades = [],
    this.rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  start(){
    console.log("Digite nome de propriedade CSS, ou digite 'SAIR' para encerrar");
    this.rl.on('line', input => {
      if (input.toUpperCase() === 'SAIR') {
        this.rl.close();
      } else {
        this.addPropriedade(input.toUpperCase());
      }
    })
    this.rl.on('close', ()=> {
      this.mostrarPropriedadesOrdenadas()
      console.log("Programa encerrado");
    })
  }

  addPropriedade(propriedade){
     this.propriedades.push(propriedade)
  }

  mostrarPropriedadesOrdenadas(){
    const propriedadesOrdenadas = this.propriedades.sort()
    console.log("Propriedades Ordenadas ");
    propriedadesOrdenadas.forEach(propriedade => console.log(propriedade))
  }


}

const listaCss = new ListasCSS()
listaCss.start()