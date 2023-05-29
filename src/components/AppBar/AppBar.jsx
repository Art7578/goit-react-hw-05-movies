import css from './AppBar.module.css';
import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container';

export default function AppBar() {
    return (
        <header className={css.header}>
            <Container>
                <Navigation/>
            </Container>
        </header>
    );
};