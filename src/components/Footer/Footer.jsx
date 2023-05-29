import css from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={css.footer}>
            <p className={css.text}>
                &copy; {new Date().getFullYear()} Movie.search
            </p>
        </footer>
    );
};

export default Footer;