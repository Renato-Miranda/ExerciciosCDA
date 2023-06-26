class Carro {
    constructor(numeroDeRodas, numeroDeMotor){
        this.numeroDeRodas = numeroDeRodas || 4;
        this.numeroDeMotor = numeroDeMotor||  1;
    }
    

    static buzinar(){
    console.log("bi bi biiiiiiiii")
    }
    static andar(){
        console.log("andar")
    }
    esteCarroBuzinando(){
        Carro.buzinar()
    }
}

Carro.buzinar()


const  NovoCarro = new Carro()
