$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault(); 
      var pokemonName = $('#pk-name').val();

      
      $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon/' + pokemonName.toLowerCase(),
        success: function(data) {
          
          var pokemonInfo = '<h2>' + data.name + '</h2>';
          pokemonInfo += '<img src="' + data.sprites.front_default + '" alt="' + data.name + '">';
          pokemonInfo += '<p>Height: ' + data.height + '</p>';
          pokemonInfo += '<p>Weight: ' + data.weight + '</p>';

          $('.poke-info').html(pokemonInfo);
        },
        error: function() {
          
          $('.poke-info').html('<p>Pokémon não encontrado!</p>');
        }
      });
    });
  });