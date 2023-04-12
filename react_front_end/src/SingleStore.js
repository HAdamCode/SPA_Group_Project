import { useLoaderData } from "react-router-dom";
import "./SingleStore.css";

export default function SingleStore() {
    const store = useLoaderData();

    return(
        <div key={store._id}>
            {/* <link rel="stylesheet" href="SingleStore.css"/> */}
            <h2>Store: {store.name}</h2>
        </div>
    )
}

async function getStore( {params} ) {
    console.log(params.store_id)
    const response = await fetch(`http://127.0.0.1:3001/stores/${params.store_id}`);
    return await response.json();
}

export { getStore }