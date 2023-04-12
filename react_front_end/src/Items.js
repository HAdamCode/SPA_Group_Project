import {Link, useLoaderData} from 'react-router-dom';
// import './Stores.css';

export default function Items() {
    const items = useLoaderData();

    return (
        <>
            {/* <link rel="stylesheet" href="Stores.css"/> */}
            {items.map((item) => (
                <div key={item._id} class="div">
                    {/* <Link to={`${item._id}`}> <h4> STORE: {item.name} </h4> </Link> */}
                    <h2>Item: {item.name} </h2>
                    Quantity: {item.quantity} <br/>
                    Price: ${item.price} <br/>
                </div>
            ))}
        </>
    )
}

async function getItems({params}) {
    const response = await fetch(`http://127.0.0.1:3001/stores/${params._id}/items`)
        .catch(console.error);
    return await response.json();
}

export { getItems }