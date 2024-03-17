//fonction fetch qui recupere les informations 
function fetchMovie(movie, api_key) {
    return fetch('https://api.themoviedb.org/3/movie/' + movie + '?api_key=' + api_key + '&language=fr-FR')
.then((response) => response.json())
}

//fonction asynchrone pour afficher
async function displayMovie(movie) {
    const api_key = ''//rajouter la cle api privé ici
    const data = await fetchMovie(movie, api_key)
    document.querySelector('#movie').innerHTML = `
        <h1>${data.title}</h1>
        <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="${data.title}">
    `
}

//appel de la fonction
displayMovie('1535')