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


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/users" element={<EditUsers />} />
          <Route path="/med/appoiment" element = {<DoctorAppoiment />}/>
          <Route path="/med/form" element = {<FormComponent />}/>
          <Route path="/med/disease" element = {<Disease />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
