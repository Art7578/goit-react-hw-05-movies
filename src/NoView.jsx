import { Link } from "react-router-dom";

export default function NoView() {
    return (
        <h1>
            No pages according to your request. Go to <Link to="/">Home page</Link>{' '} 
        </h1>
    );
};