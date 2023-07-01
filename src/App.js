import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css"
import Login from "./components/loginComp/Login";
import Register from "./components/loginComp/Register";
import ManageUsers from "./components/manageUsers/ManageUsers";
import About from "./components/defaultPages/about/About";
import Contact from "./components/defaultPages/contact/Contact";
import Home from "./components/defaultPages/home/Home";
import EditUsers from "./admin/users/EditUsers";
import DoctorAppoiment from "./components/med/appoiment/DoctorAppoiment";
import FormComponent from "./components/med/appoimentForm/FormComponent";
import Disease from "./components/med/disease/Disease";
import Calendar from "./components/calendar/Calendar";
import ManageRooms from "./components/admin/ManageRooms";
import ManageVehicles from "./components/admin/ManageVehicles";
import PatientForm from "./components/med/appoimentForm/patientForm/PatientForm";
import CereriPacienti from "./components/med/appoimentForm/formPages/CereriPacienti";
import { FormProvider } from "./components/med/appoimentForm/formComponents/FormContext";
import { ProtectedRoute } from "./components/navbar/ProtectedRoute";
import ResetPassword from "./components/loginComp/ResetPassword";


function App() {
  return (
    <FormProvider>
    <div className="App">
      <Router>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/register" element={<Register />} />
          <Route element = {<ProtectedRoute expectedRoles={["PATIENT","DOCTOR","SURGEON","ASSISTANT","SECRETARY"]}/>} >
            <Route path="/calendar" element = {<Calendar />}/>
          </ Route>
          <Route element = {<ProtectedRoute expectedRoles={["ADMIN"]}/>} >
          <Route path="/admin/users" element={<EditUsers />} />
          <Route path="/admin/rooms" element = {<ManageRooms />}/>
          <Route path="/admin/vehicle" element = {<ManageVehicles />}/>
          </ Route>
          <Route element = {<ProtectedRoute expectedRoles={["DOCTOR","SURGEON","ASSISTANT","SECRETARY"]}/>} >
            <Route path="/med/appoiment" element = {<DoctorAppoiment />}/>
            <Route path="/med/requests" element = {<CereriPacienti />}/>
            <Route path="/med/form" element = {<FormComponent />}/>
            <Route path="/med/disease" element = {<Disease />}/>
          </ Route>
          <Route element = {<ProtectedRoute expectedRoles={["PATIENT"]}/>} >
            <Route path="/patient/appointment" element = {<PatientForm />}/>
          </Route>
          </Routes>
      </Router>
    </div>
    </FormProvider>
  );
}

export default App;
