import Container from "components/Container/Container";
import PageHeading from "components/Pageheading/Pageheading";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchMoviesDetails } from "API";
import css from './MovieDetails.module.css';

export default function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getYear = () => new Date(movie.release_date).getFullYear();

    const {movieId} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    let activeClassName = {
        color: 'yellow',
    };

    const handleClick = () => navigate(location?.state?.from ?? '/');

    useEffect(() => {
        setLoading(true);
        fetchMoviesDetails(movieId)
            .then(res => {
                setMovie(res);
            })
            .catch(error => {
                setError('Something went wrong.Sorry...');
                console.log(error);
            })
            .finally(() => setLoading(false));
    }, [movieId]);

    return (
        <>
        <Container>
            <button onClick={handleClick} className={css.button}>
                Go back
            </button>

            {movie && <PageHeading text={movie.title}/>}
            {loading && 'Loading...'}
            {error && <div>{error}</div>}
            {movie && (
                <div  style={{
                    display: 'flex',
                }}>
                    <img
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    alt={movie.title}
                    />
                    <div style={{
                    marginLeft: '20px',
                }}>
                    <h3>{movie.title}</h3>
                    <p>({getYear()})</p>
                    <p>User Score: {movie.popularity}</p>
                    <div className={css.review}>
                        <h3>Overview</h3>
                        <p>{movie.overview}</p>
                    </div>
                    </div>
                </div>
            )}
            <hr/>
            <div>
                <h2>Additional Information</h2>
                <NavLink
                to={`/movies/${movieId}/reviews`}
                style={({isActive}) => (isActive ? activeClassName: undefined)}
                state={location.state}
                >
                    <p className={css.reviews}>Reviews</p>
                </NavLink>

                <NavLink
                to={`/movies/${movieId}/cast`}
                style={({isActive}) => (isActive ? activeClassName: undefined)}
                state={location.state}
                >
                    <p className={css.cast}>Cast</p>
                </NavLink>
                <hr/>
                <Outlet/>
            </div>
        </Container>
        </>
    );
};