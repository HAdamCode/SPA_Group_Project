import {Link, useLoaderData, useParams} from 'react-router-dom';


export default function Items() {
    const items = useLoaderData();
    const {store_id} = useParams();
    if (items.length == 0) {
        return(<>
            <br/>
            <h3>This store has no items</h3> <br/>
            <Link class="links" to={`/stores/${store_id}/items/new`}>Add New Item</Link>
        </>)
    }
    return (
        <>
            <br/>
            <Link class="links" to={`/stores/${store_id}/items/new`}>Add New Item</Link> <br/>
            {/* <link rel="stylesheet" href="Stores.css"/> */}
            {items.map((item) => (
                <div key={item._id} class="div">
                    {/* <Link to={`${item._id}`}> <h4> STORE: {item.name} </h4> </Link> */}
                    <h2>Item: {item.name} </h2>
                    Price: ${item.price} <br/>
                    Quantity Left: {item.quantity} <br/>
                </div>
            ))}
        </>
    )
}

async function getItems({params}) {
    const response = await fetch(`http://localhost:3001/stores/${params.store_id}/items`)
        .catch(console.error);
    return await response.json();
}

export { getItems }