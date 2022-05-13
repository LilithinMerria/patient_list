import { useEffect, useState } from "react";

const PatientData = ( {list} ) => {
  
  // "Initialising" variables using array destructuring
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!list) return; // If there is no list jump out of the UseEffect
    setLoading(true);

    // Fetching from the Endpoint
    fetch(`https://arcane-cliffs-78864.herokuapp.com/${list}`)
      .then(response => response.json())
      .then(setData)
      .then(() => setLoading(false)) // Set the Loading state to true again after fetching data
      .catch(setError);
  }, [list]); // Only Call when the value of list changes

  if (loading) return <div>The Page is Loading...</div> // Handling the loading state
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  if (!data) return null; // If there is no data return null

  return (
    <div>
      <div>{JSON.stringify(data)}</div>

      <ul>
        {data.map((datum) => (
          <span>
            <li key={datum.id}>{datum.firstname}</li>
            <li key={datum.id}>{datum.lastname}</li>
            <li key={datum.id}>{datum.status}</li>
          </span>
        ))}
      </ul>
      
    </div>
  )
  
}

export default PatientData;