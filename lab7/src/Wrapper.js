import {Link,Outlet} from 'react-router-dom';
// import './Wrapper.css';

export default function Wrapper () {
    return(
        <>
            <header>
                <link rel="stylesheet" href="Wrapper.css"/>
                <Link class="all-linsk" to="/">Home</Link>
                <Link class="all-links" to="/stores">Stores</Link>
                <Link class="all-links" to="/stores/new">New Store</Link>
            </header>

            <Outlet/>
        </>
    );
}