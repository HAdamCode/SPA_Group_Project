// import './NewTodo.css';
export default function NewStore({ }) {
  var name;
  const nameChange = (event) => {
    name = event.target.value;
  };
  return (
    <div>
      {/* <link rel="stylesheet" href="NewTodo.css" /> */}
      <form onSubmit={() => createStoreCall({ name })}>
        <div>
          Name: <input type="text" name="description" onChange={nameChange}></input>
        </div>
        <div class="add-wrapper">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}




async function createStoreCall({ name = "sample text"}) {
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

  fetch(`http://127.0.0.1:3001/stores/new`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export {createStoreCall}