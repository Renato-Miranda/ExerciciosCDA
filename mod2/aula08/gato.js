class Gato {
    constructor(nome, sexo, idade) {
        this.nome = nome
        this.sexo = sexo || 'fêmea';
        this.idade = idade || 5;
    }

    miar() {
        console.log(`${this.nome} está miando: Mingauuuuuuuuu`)
    }
    amassarPao() {
        console.log('Bora de pãozin????')
    }
    comer(){
        console.log(`Deu fome! ${this.nome} está faminto!`)
    }

}

const pablito = new Gato('Pablito', 'M', 7)
pablito.miar()

const sabrina = new Gato('Sabrina', 'F', 3)
sabrina.comer()

const amelie = new Gato('Amélie Poulain', 'F', 5)
amelie.comer()
amelie.miar()