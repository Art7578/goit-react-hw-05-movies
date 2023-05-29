import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import MoviePreview from 'components/MoviePreview/MoviePreview';
import css from './MovieList.module.css';

const MovieList = ({movies, prevLocation}) => {
    return (
        <>
        <ul className={css.list}>
            {movies.map(({id, original_title, title, poster_path, vote_average }) => (
                <li key={id} className={css.item}>
                    <Link to={`/movies/${id}`} state={{from: prevLocation}} className={css.link}>
                    <MoviePreview
                        title={original_title}
                        poster={poster_path}
                        vote={vote_average}
                        />
                    </Link>
                </li>
            ))}
        </ul>
        </>
    );
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            original_title: PropTypes.string.isRequired,
            poster_path: PropTypes.string.isRequired,
            vote_average: PropTypes.number,
        })
    ).isRequired,
};
export default MovieList;