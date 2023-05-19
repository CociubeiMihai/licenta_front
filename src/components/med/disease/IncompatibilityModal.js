import { Box, InputLabel, MenuItem, Modal, Select } from "@mui/material";
import React from "react";
import "./Disease.css";
import RemoveAddPers from "../../defaultPages/componentsForPages/RemoveAddPers";
import DiseaseAddRemove from "../../defaultPages/componentsForPages/DiseaseAddRemove";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height: 550,
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
          <InputLabel id="select-types">Your main class</InputLabel>
          <Select
            labelId="select-types"
            id="select-types"
            value={props.itemSelected}
            label="Type"
            onChange={props.handleDropdownChange}
          >
            {props.items.map((line, index) => (
              <MenuItem key={index} value={line.id}>
                {line.name}
              </MenuItem>
            ))}
          </Select>
          <div className="components">
            <div className="sub-comp">
              <label>Unchosen</label>
              <div>
                {props.items.map((line, index) => (
                  <DiseaseAddRemove
                    key={index}
                    data={line}
                    plus={true}
                    onClick={() => props.handleClikIncompatibility(line, true)}
                  />
                ))}
              </div>
            </div>
            <div className="sub-comp">
              <label>Current selection</label>
              <div >
                {props.selected.map((line, index) => (
                  <DiseaseAddRemove
                    key={index}
                    data={line}
                    plus={false}
                    onClick={() => props.handleClikIncompatibility(line, false)}
                  />
                ))}
              </div>
            </div>
          </div>

          <button className="save" style={{marginTop: "9%"}} onClick={props.onSave}>
            Save
          </button>
        </div>
      </Box>
    </Modal>
  );
}

export default IncompatibilityModal;
