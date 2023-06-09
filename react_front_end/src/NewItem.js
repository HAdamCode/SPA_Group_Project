import { useParams } from 'react-router-dom'

export default function NewItem() {
  var name;
  const nameChange = (event) => {
    name = event.target.value;
  };
  var quantity;
  const quantityChange = (event) => {
    quantity = event.target.value;
  };
  var price;
  const priceChange = (event) => {
    price = event.target.value;
  };

  const { store_id } = useParams()
  return (
    <div>
      <link rel="stylesheet" href="NewTodo.css" />
      <form onSubmit={() => createItemCall(store_id, { name, quantity, price })}>
        <br />
        <div>
          Name: <input type="text" name="name" onChange={nameChange}></input>
        </div>
        <div>
          Quantity: <input type="text" name="quantityChange" onChange={quantityChange}></input>
        </div>
        <div>
          Price: <input type="text" name="priceChange" onChange={priceChange}></input>
        </div> <br />
        <div class="add-wrapper">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}




async function createItemCall(params, { name = "sample text", quantity = "0", price = "0" }) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  console.log(params)
  var raw = JSON.stringify({
    "name": name,
    "quantity": quantity,
    "price": price
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(`http://localhost:3001/stores/${params}/items/new`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export { createItemCall }