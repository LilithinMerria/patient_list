import { useState } from "react"
import PatientNames from "./PatientList"

const SearchList = () => {

  const [searchNames, setSearchNames] = useState("")

  // A function that let you filter by Names
  const FilterFunction = (list) => {
    if (searchNames === "") return list;
    else if (list.firstname.toLowerCase().includes(searchNames.toLowerCase())) return list;
  }

  return (
    <div>
      <input type="text" onChange={(e) => setSearchNames(e.target.value)} placeholder="Search by firstname..."/>
      
      {/** Beginning of the Table */}
      
      <table>
        {/** Table Head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRSTNAME</th>
            <th>LASTNAME</th>
            <th>BIRTHDATE</th>
            <th>STATUS</th>
          </tr>
        </thead>

        {/**Table Body */}
        <tbody>
         {PatientNames.filter(FilterFunction).map((list) => (
           <tr key={list.id}>
             <td>{list.id}</td>
             <td>{list.firstname}</td>
             <td>{list.lastname}</td>
             <td>{list.birthdate}</td>
             <td>{list.status}</td>
           </tr>
         ))}
        </tbody>
        
            
       
      </table>
      
    </div>
  )
}

export default SearchList;