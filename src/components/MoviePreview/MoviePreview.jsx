import PropTypes from 'prop-types';
import css from './MoviePreview.module.css';


// Компонент превью фильма в общем списке фильмов
const MoviePreview = ({ title, poster, vote }) => {
  const posterUrl = poster
    ? `https://image.tmdb.org/t/p/w500${poster}`
    : null;
  

  return (
    <div className={css.card}>
      <div className={css.thumb}>
        <img
          src={posterUrl}
          alt={title}
          title={title}
          className={css.poster}
        />
      </div>

      <p className={css.text}>
        <span>{title}</span>
        {vote ? <b className={css.vote}>{vote}</b> : null}
      </p>
    </div>
  );
};

MoviePreview.defaultProps = {
  poster: '',
  vote: null,
};

MoviePreview.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
  vote: PropTypes.number,
};

export default MoviePreview;