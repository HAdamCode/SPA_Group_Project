import { Link, useLoaderData } from 'react-router-dom';
import './Stores.css';

export default function Stores() {
    const stores = useLoaderData();
    return (
        <>
            <link rel="stylesheet" href="Stores.css" />
            {stores.map((store) => (
                <div key={store._id} class="stores">
                    <Link class="links" to={`${store._id}`}> <h4> STORE: {store.name} </h4> </Link>
                </div>
            ))}
        </>
    )
}

async function fetchStores() {
    const response = await fetch(`http://localhost:3001/stores`)
        .catch(console.error);
    return await response.json();
}

export { fetchStores }