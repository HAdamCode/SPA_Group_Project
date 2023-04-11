import { useLoaderData } from "react-router-dom";
import "./SingleStore.css";

export async function getStore( {params} ) {
    const response = await fetch("REPLACE WITH MONGO REQUEST");
    return await response.json();
}

export default function SingleStore() {
    const store = useLoaderData();

    return(
        <div key={store._id}>
            <link rel="stylesheet" href="SingleStore.css"/>
            <h2>Store: {store.name}</h2>
            <div>REPLACE WITH ITEMS OF STORE CALL</div>
        </div>
    )
}