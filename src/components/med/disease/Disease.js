import React, { useEffect, useState } from "react";
import Navbar from "../../navbar/Navbar";
import "./Disease.css";
import InsertDiseaseModal from "./InsertDiseaseModal";
import {
  allDiseases,
  allTypes,
  getIncompatibility,
  saveDisease,
  saveIncompatibility,
  saveType,
} from "../../../services/DiseaseService";
import CategoryModal from "./CategoryModal";
import IncompatibilityModal from "./IncompatibilityModal";
import Table from "../../defaultPages/componentsForPages/Table";
import TableComponent from "../../defaultPages/componentsForPages/Table";
import { MenuItem, Select } from "@mui/material";

const columnsTable = [
  { id: "description", label: "Disease", minWidth: 170 },
  { id: "category", label: "Category", minWidth: 170 },
];

const columnsTableClasses = [
  { id: "name", label: "Incompatible width", minWidth: 170 }
];

function Disease() {
  const [insertDict, setInsertDict] = useState({
    open: false,
    value: "",
    placeholder: "Type the new disease",
    label: "Insert new disease",
  });
  const [typedict, setTypeDict] = useState({
    open: false,
    value: "",
    placeholder: "Type a new category",
    label: "Insert new category",
  });
  const [incompatibilityDict, setIncompatibilityDict] = useState({
    open: false,
    value: [],
    id: "",
    label: "Incompatibility classes",
  });
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [diseases, setDiseases] = useState([]);
  const [selectedID, setSelectedId] = useState("");
  const [incompatibilityClasses, setIncompatibilityClasses] = useState([]);

  useEffect(() => {
    allDiseases().then((r) => {
      setDiseases(r.data);
    });
    allTypes().then((r) => {
      setTypes(r.data);
    });
  }, []);

  useEffect(() => {
    if(selectedID !== "")
      getIncompatibility(selectedID).then((res) => {
        setIncompatibilityClasses(res.data)
      })
  }, [selectedID]);

  const handleSaveDisease = () => {
    console.log(insertDict)
    saveDisease(selectedType, insertDict.value).then(()=>{
      allDiseases().then((r) => {
        setDiseases(r.data);
      });
      setInsertDict({ ...insertDict, open: false, value: ""  });
    });
  };

  const handleOpenIncompatibility = () => {
    setIncompatibilityDict({ ...incompatibilityDict, open: true });
    allTypes().then((r) => {
      setTypes(r.data);
    });
  };

  const handleOpen = () => {
    setInsertDict({ ...insertDict, open: true });
    allTypes().then((r) => {
      setTypes(r.data);
    });
  };

  const handleOpenCategoryModal = () => {
    setTypeDict({ ...typedict, open: true });
  };

  const handleSaveCategory = () => {
    saveType(typedict.value);
    setTypeDict({ ...typedict, open: false, value: "" });
  };

  const handleClikIncompatibility = (e, plus) => {
    if (plus) {
      if (!selectedTypes.includes(e)) setSelectedTypes([...selectedTypes, e]);
    } else {
      setSelectedTypes(selectedTypes.filter((row) => row !== e));
    }
  };

  const handleSaveIncompatibility = () => {
    saveIncompatibility(selectedType, selectedTypes).then(()=>{
      setIncompatibilityDict({...incompatibilityDict, open: false})
      setSelectedTypes([])
    });
  };

  return (
    <div>
      <Navbar />
      <div className="general">
        <div className="table">
          <div className="table-comp">
        <TableComponent columns={columnsTable} data={diseases} />
        </div>
        <div className="table-comp">
        <Select
          labelId="select-types"
          id="select-types"
          value={selectedID}
          label="Type"
          onChange={(e) => setSelectedId(e.target.value)}
        >
          {types.map((line, index) => (
            <MenuItem key={index} value={line.id}>
              {line.name}
            </MenuItem>
          ))}
        </Select>
        <TableComponent columns = {columnsTableClasses} data = {incompatibilityClasses}/>
        </div>
        </div>
        <div className="buttons">
          <button onClick={handleOpenCategoryModal}>Create category</button>
          <button onClick={handleOpen}>Insert disease</button>
          <button onClick={handleOpenIncompatibility}>
            Create incompatibility cases
          </button>
        </div>
      </div>
      <InsertDiseaseModal
        dictionary={insertDict}
        close={() => setInsertDict({ ...insertDict, open: false })}
        changeValue={(e) =>
          setInsertDict({ ...insertDict, value: e.target.value })
        }
        onSave={handleSaveDisease}
        items={types}
        itemSelected={selectedType}
        handleDropdownChange={(e) => setSelectedType(e.target.value)}
      />
      <CategoryModal
        dictionary={typedict}
        close={() => setTypeDict({ ...typedict, open: false })}
        changeValue={(e) => setTypeDict({ ...typedict, value: e.target.value })}
        onSave={handleSaveCategory}
      />
      <IncompatibilityModal
        dictionary={incompatibilityDict}
        close={() =>
          setIncompatibilityDict({ ...incompatibilityDict, open: false })
        }
        items={types}
        handleClikIncompatibility={handleClikIncompatibility}
        selected={selectedTypes}
        onSave={handleSaveIncompatibility}
        itemSelected={selectedType}
        handleDropdownChange={(e) => setSelectedType(e.target.value)}
      />
    </div>
  );
}

export default Disease;
