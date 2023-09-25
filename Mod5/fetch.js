const api = 'http://randomuser.me/api'

function request() {
    fetch('http://randomuser.me/api')
    .then((resposta) => resposta.json())
    .then((json) => console.log(json))
}

request()