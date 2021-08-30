export const apiKey = "YOUR_TMDB_APİ_KEY";

export const IMAGES_API = 'https://image.tmdb.org/t/p/w1280' 


export const MOVIES_API = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=`

export const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`

export const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${apiKey}&query=`
