async function getUsers() {
    let response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films?type=TV_SERIES', {
        headers: {
            'X-API-KEY': '547168ea-23c4-44f0-97a6-245a483e4d25'
        }
    });
    films = response.data.items;
    createKino()
}

let films = []
let movies = document.getElementById('movies')
getUsers()


function createKino() {
    for (let user of films) {
        let movie = document.createElement('div')
        let movieCoverInner = document.createElement('div')
        let movieCover = document.createElement('img')
        let movieTitle = document.createElement('div')
        let movieAverage = document.createElement('div')
        let years = document.createElement('div')

        movie.classList.add('movie')
        movieCoverInner.classList.add('movie__cover-inner')
        movieCover.classList.add('movie__cover')
        movieTitle.classList.add('movie__title')
        movieAverage.classList.add('movie__average')
        years.classList.add('years')

        movieCover.src = user.posterUrl
        movieTitle.innerHTML = user.nameRu
        movieAverage.innerHTML = user.ratingKinopoisk
        years.innerHTML = user.year

        movieCoverInner.append(movieCover)

        movie.append(movieCoverInner, movieTitle, movieAverage, years)

        movies.append(movie)
    }
}