import {Link, useLoaderData} from 'react-router-dom';


export default function Items() {
    const items = useLoaderData();
    
    if (items.length == 0) {
        return(<>
            <br/>
            <h3>This store has no items</h3>
        </>)
    }
    return (
        <>
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