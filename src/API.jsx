import axios from "axios";

const API_KEY = '8e49cbba380ebc6498ddfc781ac5e247';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const END_POINTS = {
    trending: '/trending/movie/week',
    search: '/search/movie',
    details: '/movie',
    credits: '/credits',
    reviews: '/reviews',
};

export const getMovies = async(page = 1) => {
    const res = await axios.get(
        `${END_POINTS.trending}?api_key=${API_KEY}&page=${page}&language=en-US&include_adult=false`
    );
    return res.data.results;
};

export const fetchByQuery = async (query, page = 1) => {
    const res = await axios.get(
        `${END_POINTS.search}?api_key=${API_KEY}&page=${page}&query=${query}&language=en-US&include_adult=false`
    );
    return res.data.results;
};

export const fetchMoviesDetails = async id => {
    const res = await axios.get(
        `${END_POINTS.details}/${id}?api_key=${API_KEY}&language=en-US`
    );
    return res.data;
}

export const fetchMoviesCredits = async id => {
    const res = await axios.get(
        `/movie/${id}${END_POINTS.credits}?api_key=${API_KEY}&language=en-US`
    );
    return res.data.cast;
};

export const fetchMoviesReviews = async(id, page = 1) => {
    const res = await axios.get(
        `/movie/${id}${END_POINTS.reviews}?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    return res.data.results;
};
