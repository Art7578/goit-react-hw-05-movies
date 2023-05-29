import css from './Pageheading.module.css';

export default function PageHeading({text}) {
    return <h1 className={css.title}>{text}</h1>
};
