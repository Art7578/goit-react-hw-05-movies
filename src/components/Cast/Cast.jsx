import css from './Cast.module.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesCredits } from 'API';

const Cast = () => {
    const {movieId} = useParams();

    const [cast, setCast] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCast = async() => {
            try {
                setLoading(true);
                const res = await fetchMoviesCredits(movieId);
                setCast(res);
            } catch (error) {
                setError('Something went wrong :(');
            } finally {
                setLoading(false);
            }
        };
        fetchCast();
    }, [movieId]);

    return (
        <>
        {loading && 'Loading...'}
        {error && <div>{error}</div>}
        <ul className={css.list}>
            {cast.map(castItem => {
                return (
                    <li key={castItem.id} className={css.item}>
                        <img
                        src={`https://image.tmdb.org/t/p/w300${castItem.profile_path}`}
                        alt={`${castItem.name} portrait`}
                        />
                        <div>
                            <p className={css.name}>Name: {castItem.name}</p>
                            <p className={css.character}>Character: {castItem.character}</p>
                        </div>
                    </li>
                );
            })}
        </ul>
        </>
    );
};

export default Cast;