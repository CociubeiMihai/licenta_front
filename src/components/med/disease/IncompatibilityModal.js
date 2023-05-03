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

function IncompatibilityModal(props) {
  return (
    <Modal
      open={props.dictionary.open}
      onClose={() => props.close()}
      aria-labelledby="incompatibility-disease"
      aria-describedby="incompatibility-disease-modal"
    >
      <Box sx={style}>
        <div className="general">
          <h1>{props.dictionary.label}</h1>
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
          <button className="save" onClick={props.onSave}>
            Save
          </button>
        </div>
      </Box>
    </Modal>
  )
}

export default IncompatibilityModal