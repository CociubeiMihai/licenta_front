import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  RadioGroup,
  Select,
} from "@mui/material";
import "./EditRoomModal.css";
import { vehicleRdio } from "../../../config/AppoimentFields";
import ReactImageFileToBase64 from "react-file-image-to-base64";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const options = [
  { id: "vovid1", label: " Yes", value: true },
  { id: "covid2", label: " No", value: false },
];

function EditVehicleModal(props) {

  const handleCompleted = (event) =>{
    props.setData({ ...props.vehicle, img: event[0].base64_file })
  }

  return (
    <div>
      <Modal
        open={props.open}
        onClose={() => props.close()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal-div">
            <label>Nume vehicul</label>
            <input
              value={props.vehicle.nume}
              onChange={(e) =>
                props.setData({ ...props.vehicle, nume: e.target.value })
              }
            />
            <label>
              Transport contagios?
              <input
                type="checkbox"
                checked={props.vehicle.covid}
                onChange={(e) =>
                  props.setData({
                    ...props.vehicle,
                    covid: !props.vehicle.covid,
                  })
                }
                style={{
                  marginLeft: "8px",
                  marginRight: "8px",
                  transform: "scale(1.2)",
                }}
              />
            </label>
            <ReactImageFileToBase64 
              multiple={false}
              onCompleted={handleCompleted}
            />
            {props.vehicle.img && (
              <img
              src={props.vehicle.img} alt=""
                style={{ width: "200px", height: "200px", objectFit: "cover", marginTop: "20PX" }}
              />
            )}

            <div className="buttons-cls">
              <button className="remove" onClick={() => props.onRemove()}>
                Șterge
              </button>
              <button className="saveCls" onClick={() => props.onSave()}>
                Salvează
              </button>
              <button className="cancel" onClick={() => props.close()}>
                Renunță
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default EditVehicleModal;
