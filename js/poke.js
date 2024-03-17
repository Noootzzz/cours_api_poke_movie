//fonction fetch qui recupere les informations 
function fetchPokemon(pokemon) {
    return fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
    .then((response) => (response.json()))
}

//fonction asynchrone pour afficher
async function displayPokemon(pokemon) {
    const data = await fetchPokemon(pokemon)
    document.querySelector('#pokemon').innerHTML = `
        <h1>${data.name}</h1>
        <img src="${data.sprites.front_default}" alt="${data.name}">
    `
}

//appel de la fonction
displayPokemon('rayquaza')