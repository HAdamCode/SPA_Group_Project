import './NewStore.css';
import { v4 as uuidv4 } from 'uuid';

export default function CreateStore() {
    //Variables here and their states
    var id = uuidv4();
    var name;
    const nameChange = (event) => {
        name = event.target.value;
    };

    return (
        <div>
            <link rel="stylesheet" href="NewStore.css"/>
            <form id="newForm" onSubmit={()=> createStoreCall(id,name)}/>
        </div>
    )
    /**
     * if (completed == "on") {
        completed = true
    }

    let info = JSON.stringify({
        "description": desc,
        "completed": completed
    });

    var requestInfo = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: info,
        redirect: 'follow'
    };

    fetch("http://localhost:3001/todo", requestInfo)
        .then(response => response.text())
        .then(result => console.log(result))
        .then(error => console.log('error',error));
     */

}

export async function createStoreCall ({ id ="1234", name = "default"}) {
    let info = JSON.stringify({
        "_id": id,
        "name": name
    });
    var requestInfo = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:info,
        redirect: 'follow'
    };

    // IMPLEMENT MONGODB POST    
}