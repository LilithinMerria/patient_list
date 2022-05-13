//import PatientData from "./MainData";
import SearchList from "./SearchPatient";
//import SubmitPatient from "./Submit";

const PatientSection = () => {
    
  return (
    <div className="content-wrapper">
      {/*<PatientData list="patients" />*/}
      {/*<SubmitPatient />*/}
      <SearchList />
    </div>
  )
}

export default PatientSection;