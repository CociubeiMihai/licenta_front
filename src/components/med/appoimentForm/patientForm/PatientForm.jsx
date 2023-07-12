import React, { useEffect, useState } from "react";
import "../FormConponentStyle.css";
import Navbar from "../../../navbar/Navbar";
import background from "../../../../images/foormPG1.jpg";
import {
  InputsPatient,
  groupsPatient,
  parinte,
} from "../../../../config/AppoimentFields";
import FormInput from "../../../defaultPages/componentsForPages/FormInput";
import { MenuItem, Select } from "@mui/material";
import { allDiseasesID } from "../../../../services/DiseaseService";
import RadioGroup from "../formComponents/RadioGroup";
import { savePatientReq } from "../../../../services/PatientRequesService";
import { recAppointment } from "../../../../services/AppoimentService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PatientForm() {
  const [values, setValues] = useState({
    selectDate: "",
    diagnostic: "",
    fever: "",
    recAppoint: "",
    covid: "",
    isFmale: ""
  });
  const [selectedID, setSelectedId] = useState("");
  const [diseases, setDiseases] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    allDiseasesID().then((res) => {
      setDiseases(res.data);
    });
  }, []);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  function handleOptionChange(groupName, value) {
    if (groupName === "recAppoint" && value)
      recAppointment(user.id).then((rez) => {
        if (rez.data.diagnostic != "") {
          setValues({
            ...values,
            ["diagnostic"]: rez.data.diagnostic,
            [groupName]: value,
          });
          toast.info("Câmpurile au fost actualizate cu succes");
        } else {
          toast.warn("Nu ați avut diagnostic la ultimul consult");
          toast.info(
            "Dacă aveți acum un nou diagnostic vă rugăm să îl introduceți",
            { autoClose: 10000 }
          );
        }
        setSelectedId(rez.data.idDesease);
      });
    setValues((values) => ({
      ...values,
      [groupName]: value,
    }));
  }

  const handleSubmit = () => {
    savePatientReq(
      values.selectDate,
      values.diagnostic,
      values.fever,
      values.recAppoint,
      values.covid,
      selectedID,
      user.id,
      values.isFmale
    );
  };

  return (
    <div className="form-main-default">
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${background})`,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="form-pages">
          <div className="principal-div-pag1">
            <h1>Creează o cerere</h1>
            <div className="appoiment-form">
              <form onSubmit={handleSubmit}>
                {InputsPatient.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                ))}
                <div className="drop-div">
                  <label>Patient Disease</label>
                  <Select
                    labelId="select-disease"
                    id="select-disease"
                    value={selectedID}
                    label="Disease"
                    onChange={(e) => setSelectedId(e.target.value)}
                  >
                    {diseases.map((line, index) => (
                      <MenuItem key={index} value={line.id}>
                        {line.description}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
                {groupsPatient.map((group) => (
                  <RadioGroup
                    key={group.name}
                    label={group.label}
                    name={group.name}
                    options={group.options}
                    selectedOption={values[group.name]}
                    onChange={(value) => handleOptionChange(group.name, value)}
                  />
                ))}
                {user.age < 18 && (
                  <RadioGroup
                    key={parinte.name}
                    label={parinte.label}
                    name={parinte.name}
                    options={parinte.options}
                    selectedOption={values[parinte.name]}
                    onChange={(value) =>
                      handleOptionChange(parinte.name, value)
                    }
                  />
                )}
                <button>Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default PatientForm;
