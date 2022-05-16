import { useEffect, useState } from "react";

const PatientData = ( {list} ) => {
  
  // "Initialising" variables using array destructuring with useState()
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!list) return; // If there is no list jump out of the UseEffect
    setLoading(true);

    // Fetching from the Endpoint using a template to make it more flexible
    fetch(`https://3cf3-2a03-4000-65-fdf-28b7-92ff-fe63-4b2b.eu.ngrok.iod/${list}`)
      .then(response => response.json()) // convert response into json()
      .then(setData)
      .catch(() => setError)
      .finally(() => setLoading(false)) // Set the Loading state to true again after fetching data
  }, [list]); // dependency on list beacause Only Call when the value of list changes

  if (loading) return <div>The Page is Loading...</div> // Handling the loading state
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  if (!data) return <div>No data</div>; // If there is no data return null

  // When you have the data
  return (
    <div>
      <div>{JSON.stringify(data)}</div> 

      <table>

      </table>
      
    </div>
  )
  
}

export default PatientData;