import {Link, useLoaderData} from 'react-router-dom';
import './Stores.css';

export default function Stores() {
    const stores = useLoaderData();

    return (
        <>
            <link rel="stylesheet" href="Stores.css"/>
            {stores.map((store) => (
                <div key={store._id} class="div">
                    <Link to={`${store._id}`}> <h4> STORE: {store.name} </h4> </Link>
                </div>
            ))}
        </>
    )
}

async function fetchStores() {
    const response = await fetch(`http://127.0.0.1:3001/stores`)
        .catch(console.error);
    return await response.json();
}

export { fetchStores }