export default function NewStore({ }) {
  var name;
  const nameChange = (event) => {
    name = event.target.value;
  };
  return (
    <div>
      <br />
      <h3>Add New Store</h3>
      <br />
      <form onSubmit={() => createStoreCall({ name })}>
        <div>
          Name: <input type="text" name="description" onChange={nameChange}></input>
        </div>
        <br />
        <div class="add-wrapper">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

async function createStoreCall({ name = "sample text" }) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "name": name,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(`http://localhost:3001/stores/new`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export { createStoreCall }