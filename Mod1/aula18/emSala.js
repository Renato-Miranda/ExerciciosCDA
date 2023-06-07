var gaveta = [
    ['Presilha', 'Elastico', 'Escova'],
    ['lapis', 'borracha']
]

var item = 'Elastico'

function encontrarItem(){
    for (var i = 0; i < gaveta.length; i++){
        var pote = gaveta[i]
        var temOItem = false
        if (pote.indexOf(item)!=-1){
            console.log(`Item encontrado no pote ${i}`)
            temOItem = true
            break
        }
    }
    if (!temOItem) {
        console.log('Item não encontrado')
    }
}

encontrarItem(item)