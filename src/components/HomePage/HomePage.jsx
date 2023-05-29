import Container from "components/Container/Container";
import PageHeading from "components/Pageheading/Pageheading";
import MovieList from "components/MovieList/MovieList";
import NoView from "NoView";
import { useEffect, useState } from "react";
import { getMovies } from "API";

export default function GetTrendingMovies() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchTrendingMovies = () => {
            setLoading(true);
            getMovies()
                .then(results => {
                    setMovies(results);
                })
                .catch(error => {
                    setError('Something went wrong. Sorry...');
                    console.log(error);
                })
                .finally(() => setLoading(false));
        };
        fetchTrendingMovies();
    }, []);

    const notFound = !loading && !movies.length;
    return (
        <>
        <Container>
            <PageHeading text={'Trending Movies'}></PageHeading>
            {loading && 'Loading...'}
            {notFound && <NoView/>}
            {error && <div>{error}</div>}
            {movies && <MovieList movies={movies}/>}
        </Container>
        </>
    );
};