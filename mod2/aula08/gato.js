class Gato {
    constructor(numeroDePatas, numeroDeRabo, numeroDeOrelhas, sexo, idade) {
        this.numeroDePatas = numeroDePatas || 4;
        this.numeroDeRabo = numeroDeRabo || 1;
        this.numeroDeOrelhas = numeroDeOrelhas || 2;
        this.sexo = sexo || 'fêmea';
        this.idade = idade || 5;
    }

    miar() {
        console.log('Miau bom dia miau!')
    }
    amassarPao() {
        console.log('Bora de pãozin????')
    }
    comer(){
        console.log('nham nham!')
    }

}

const gato1 = new Gato(4, 1, 2, 'Femea', 5)
gato1.amassarPao()