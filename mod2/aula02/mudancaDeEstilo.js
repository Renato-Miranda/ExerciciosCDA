// var conte = document.querySelector('#conteiner')

// conte.addEventListener('click', function(){
//     conte.style.flexDirection = 'column'
//     if(conte.style.flexDirection == 'column'){
//         conte.addEventListener('click', function(){
//         conte.style.flexDirection = 'row'})
//     }
// })


var conte = document.querySelector('#conteiner');
var ehColuna = true;

conte.addEventListener('click', function () {
    if (ehColuna) {
        conte.style.flexDirection = 'column';
        ehColuna = false;
    } else {
        conte.style.flexDirection = 'row';
        ehColuna = true;
    }
});
