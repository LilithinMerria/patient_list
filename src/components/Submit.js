import axios from "axios";
import { useState } from "react";

const url = "https://2a39-2001-8a0-6a66-200-1813-3ef9-7b12-c3e9.eu.ngrok.io/patients";

const SubmitPatient = () => {

  // Setting data with useState
  const [datum, setDatum] = useState([{
    id:0,
    username:"",
    surname:""
  }]);

  // Submit function using the Post method via Axios
  const Submit = (e) => {
    e.preventDefault();
    axios.post(url, {
      id: datum.id,
      name: datum.username,
      surname: datum.surname
    }).then(response => console.log("Posting Patient List", response))
      .catch(error => console.log(error));
  }

  return (
    <form>
      <input onChange={(e) => setDatum(e.target.value) } placeholder="id" value={datum.id}/>
      <input onChange={(e) => setDatum(e.target.value)} placeholder="name" value={datum.username}/>
      <input onChange={(e) => setDatum(e.target.value)} placeholder="surname" value={datum.surname}/>
      <button onClick={Submit}>Post</button>
    </form>
  )
}

export default SubmitPatient;