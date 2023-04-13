import { Link, Outlet } from 'react-router-dom';
import './Wrapper.css';

export default function Wrapper() {
    return (
        <>
            <link rel="stylesheet" href="Wrapper.css" />
            <header class="center">
                <link rel="stylesheet" href="Wrapper.css" />
                <Link class="home-link" to="/">Home</Link>
                <Link class="all-link" to="/stores">Stores</Link>
                <Link class="new-link" to="/stores/new">New Store</Link>
            </header>
            <Outlet />
        </>
    );
}