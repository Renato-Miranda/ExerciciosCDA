class AnotacoesController {
    constructor(){
        this.anotaçoes = []
    }
    addAnotaçoes(titulo, nota){
        try{
            const notas = new Notas(titulo, nota)
            this.anotaçoes = [...this.anotaçoes, nota]
        }catch(error){
            console.log(error.message);
            return
        }
    }
    mostraAnotaçoes (){
        console.log(this.anotaçoes);
    }
}

const controller = new AnotacoesController()

btn.addEventListener('click', event=>{
    event.preventDefault;
    const valores = [tituloDom.value, notaDom.value]
    controller.addAnotaçoes(...valores)
})