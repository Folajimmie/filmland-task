const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '358122add9ff8725d6ca0829a99c34df';
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';const BACKDROP_SIZE = 'w1280';
const POSTER_SIZE = 'w780';

const requests = {
    SEARCH_BASE_URL : `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`,
    POPULAR_BASE_URL : `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`,
    NOW_PLAYING_URL : `${API_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    TOP_RATED_URL : `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    LATEST_URL : `${API_URL}/movie/upcoming?api_key=${API_KEY}]&language=en-US&page=1`,
    SERIES_URL : `${API_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1}`,
    IMAGE_BASE_URL : 'http://image.tmdb.org/t/p/',
    BACKDROP_SIZE : 'w1280',
    POSTER_SIZE : 'w780',
};

export {requests, IMAGE_BASE_URL, BACKDROP_SIZE,POSTER_SIZE};