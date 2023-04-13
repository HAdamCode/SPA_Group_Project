import { Link, useLoaderData } from "react-router-dom";
import "./SingleStore.css";

export default function SingleStore() {
    const store = useLoaderData();

    return (
        <div key={store._id}>
            <h2>{store.name}</h2>
            <Link class="links" to={`/stores/${store._id}/items`}>View All Items</Link>
        </div>
    )
}

async function getStore({ params }) {
    console.log(params.store_id)
    const response = await fetch(`http://localhost:3001/stores/${params.store_id}`);
    return await response.json();
}

export { getStore }