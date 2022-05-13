import PatientNames from './PatientList'

const ListTable = ( {filter} ) => {
  return (
    
    <table>
    {/** Table Head */}
    <thead>
      <tr>
        <th>ID</th>
        <th>FIRSTNAME</th>
        <th>LASTNAME</th>
        <th>BIRTHDATE</th>
        <th>STATUS</th>
        <th>ACTION</th>
      </tr>
    </thead>

    {/**Table Body */}
    <tbody>
      {PatientNames.filter(filter).map((list) => (
        <tr key={list.id}>
          <td>{list.id}</td>
          <td>{list.firstname}</td>
          <td>{list.lastname}</td>
          <td>{list.birthdate}</td>
          <td>{list.status}</td>
          <td><button>SUBMITTED</button></td>
        </tr>
      ))}
    </tbody>
      
          
    
    </table>
  )
}

export default ListTable;