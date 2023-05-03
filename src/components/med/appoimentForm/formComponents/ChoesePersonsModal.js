import {
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import RemoveAddPers from "../../../defaultPages/componentsForPages/RemoveAddPers";
import { Roles } from "../../../../config/AppRoles";
import "./ChoesePersonsModalStyle.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  background: "#fff",
  boxShadow: 24,
  p: 4,
};

const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 500,
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  background: "#fff",
  boxShadow: 24,
  p: 4,
};

function ChoesePersonsModal(props) {
  const [selectedStaff, setSelectedStaff] = useState([]);

  useEffect(() => {
    setSelectedStaff([])
  },[props.open]);

  const handleRemove = (e) => {
    setSelectedStaff(selectedStaff.filter((row) => row !== e));
  };

  const handleAdd = (e) => {
    if (!selectedStaff.includes(e)) 
    setSelectedStaff([...selectedStaff, e]);
  };


  var selected = selectedStaff.map((row, index) => {
    return (
      <RemoveAddPers
        key={index}
        data={row}
        onClick={handleRemove}
        plus={false}
      />
    );
  });

  return (
    <div>
      <Modal
        open={props.open}
        onClose={() => props.close()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={props.role ? style : style1}>
          
          {props.role ? (
            <div className="antet">
            <FormControl className="dropdown">
              <InputLabel id="label">Role</InputLabel>
              <Select
                labelId="label"
                id="demo-simple-select"
                value={props.searchRole}
                label="Role"
                style={{
                  width: 180,
                  display: "flex",
                  justifyContent: "flex-start",
                  textAlign: "left",
                }}
                onChange={(e) => props.rolChange(e.target.value)}
              >
                {Roles.map((item, index) => {
                  return (
                    (item.capsName != "PATIENT" ?
                    <MenuItem key={index} value={item.capsName}>
                      {item.name}
                    </MenuItem>:null )
                  );
                })}
              </Select>
            </FormControl>
            <div className="dropdown"><h2>Your current selection</h2></div>
            
            </div>
          ) : (
            null
          )}
          <div className="users-div">
            <div className="user-comp">
              {props.displayData.map((row, index) => (
                <RemoveAddPers
                  key={index}
                  data={row}
                  plus={true}
                  onClick={() =>
                    props.role ? handleAdd(row) : props.handleAdd(row)
                  }
                />
              ))}
            </div>
            <div className="user-comp">{selectedStaff.length > -1 ? selected : ""}</div>
          </div>
          {props.role ? (
          <div className="bttn">
            <button onClick={() => props.handleAdd(selectedStaff)} >Submit</button>
          </div>): null}
          
        </Box>
      </Modal>
    </div>
  );
}

export default ChoesePersonsModal;
