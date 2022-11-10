const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
let offset = 0
const limit = 5
const maxRecords = 11

function convertPokemnonTypesToLi(pokemonTypes){
  return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}


function loadPokemonItems(offset, limit){
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
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML += newHtml
  })
}

loadPokemonItems(offset,limit)

loadMoreButton.addEventListener('click', () =>{
  offset += limit 
  const qtdRecordsNextPage = offset + limit

  if (qtdRecordsNextPage >= maxRecords) {
    const newLimt = qtdRecordsNextPage - maxRecords
    loadPokemonItems(offset, newLimt)
    loadMoreButton.parentElement.removeChild(loadMoreButton)
  }else
    loadPokemonItems(offset,limit)
 })
