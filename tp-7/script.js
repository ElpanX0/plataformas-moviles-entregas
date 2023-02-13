const container = document.getElementById("container");

function fetchKantoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(function(allpokemon) {
        allpokemon.results.forEach(async function(element) {
            await fetch(element.url)
            .then(response => response.json())
            .then(function(pokemonData){
                container.innerHTML += `<div class="mt-2 col-12 col-sm-6 col-md-4">
                    <div class="card text-center">
                    <div class="card-body">
                        <img src=${pokemonData.sprites.front_default} />
                        <h5 class="card-title">${pokemonData.name.toUpperCase()}</h5>
                        <div>
                            ${pokemonData.types[0].type.name.toUpperCase()} ${pokemonData.types[1] ? '- ' + pokemonData.types[1].type.name.toUpperCase() : ''}
                        </div>
                    </div>
                </div>`
            })
        });
    })
  }

  fetchKantoPokemon()