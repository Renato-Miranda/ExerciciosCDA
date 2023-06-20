var carro = {
    cor: "verde",
    capacidadeDeCombustivel: 56,
    combustivel: 56,
    consumo: 15,
    rodar: function(km){
        var autonomia = this.combustivel * this.consumo
        if(km <= autonomia && km > 0){
            var cons = km / 15
            this.combustivel = this.combustivel - cons
        } else {
            console.log("Não há combustivel suficiente")
        }   
    },
    getCombustivel: function(){
        return this.combustivel
    },
    setCombustivel: function(volume){
        this.combustivel = volume
        return this.combustivel
    }
}