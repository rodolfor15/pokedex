const pokemonList = document.getElementById('pokemonList')

function convertPokemnonTypesToLi(pokemonTypes){
  return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon){
  return `
      <li class="pokemon ${pokemon.type}">
        <span class="number">#0${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        
        <div class="detail">
            <ol class="types">
              ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}" alt"${pokemon.name}">
        </div>
      </li>
  `
}

pokeApi.getPokemons().then((pokemons = []) => {
  //  pokemonList.innerHTML += pokemon.map(convertPokemonToLi).join('')
   const newHtml = pokemons.map(convertPokemonToLi).join('')
  pokemonList.innerHTML = newHtml
})


 
