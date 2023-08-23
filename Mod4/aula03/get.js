import axios from 'axios';

// sintaxe fetch/get

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then((response)=>{
//         if (response.ok){
//             return response.json()}
//     })
//     .then ((data)=>{
//         console.log(data.name);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then((response)=>{
//         console.log(response.data.name);
//     });

axios.get('https://randomuser.me/api/?results=numeroUsuario')
    .then((response)=>{
        console.log(response.data.name);
    });