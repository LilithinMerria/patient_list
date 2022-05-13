import { useState } from "react"
import ListTable from "./ListTable"
//import PatientNames from "./PatientList"

const SearchList = () => {

  const [searchNames, setSearchNames] = useState("")

  // A function that let you filter by Names
  const filterFunction = (list) => {
    if (searchNames === "") return list;
    else if (searchNames.toLowerCase().includes(list.firstname.toLowerCase())
     || (list.lastname.toLowerCase().includes(searchNames.toLowerCase()))) return list;
    
  }

  return (
    <div>
      <input type="text" onChange={(e) => setSearchNames(e.target.value)} placeholder="Search by firstname..."/>
      
      {/** Beginning of the Table */}
      
     <ListTable filter={filterFunction}/>
      
    </div>
  )
}

export default SearchList;