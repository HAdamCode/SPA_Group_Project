import {Link, useLoaderData} from 'react-router-dom';
import './Stores.css';

export default function Stores() {
    const { stores } = useLoaderData();

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

//CONNECT TO MONGO
async function fetchStore() {
    const response = await fetch(`REPLACE WITH MONGO REQUEST`)
        .catch(console.error);
    return await response.json();
}

export { fetchStore }