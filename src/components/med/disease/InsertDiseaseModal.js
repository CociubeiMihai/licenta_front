import { Box, InputLabel, MenuItem, Modal, Select } from "@mui/material";
import React from "react";
import "./Disease.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  background: "#fff",
  boxShadow: 24,
  p: 4,
};

function InsertDiseaseModal(props) {
  return (
    <Modal
      open={props.dictionary.open}
      onClose={() => props.close()}
      aria-labelledby="insert-disease"
      aria-describedby="insert-disease-modal"
    >
      <Box sx={style}>
        <div className="general">
          <h1>{props.dictionary.label}</h1>
          <input
            key={"diagnostic"}
            name="diagnostic"
            type="text"
            placeholder={props.dictionary.placeholder}
            value={props.dictionary.value}
            onChange={props.changeValue}
          />
          <InputLabel id="select-types">Disease type</InputLabel>
          <Select
            labelId="select-types"
            id="select-types"
            value={props.itemSelected}
            label="Type"
            onChange={props.handleDropdownChange}
          >
            {props.items.map((line,index) => (
              <MenuItem key={index} value={line.id}>{line.name}</MenuItem>
            ))}
          </Select>
          <button className="save" style={{marginTop: "5%"}} onClick={props.onSave}>
            Save
          </button>
        </div>
      </Box>
    </Modal>
  );
}

export default InsertDiseaseModal;
