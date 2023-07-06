class Carro {
    constructor(motor, portas, marca, modelo) {
        this.motor = motor;
        this.portas = portas;
        this.marca = marca;
        this.modelo = modelo;
        this.nRodas = 4;
        this.vidros = true;
    }
    andar(){
        console.log(`O ${this.modelo}, está andando! Vrummmmmm`);
    }
    freiar(){
        console.log(`O ${this.modelo}, está parando`);
    }
}

class Uno extends Carro {
    constructor( portas,  cor, modelo){
        super(1.5, portas, cor, modelo)
        this.cor = cor
    }
}

const uno1995Turbo = new Uno( 2,  'vermelho')

console.log(uno1995Turbo);


class Marea extends Uno {
    constructor(){
        super(2.0, 2, "verde pérola", 'Marea')
    }
}