import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import { RoomTypes } from "../../../config/AppRoles";
import "./EditRoomModal.css";
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

function EditRoomModal(props) {
  const handleCompleted = (event) =>{
    props.setData({ ...props.room, img: event[0].base64_file })
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
            <label>Numele camerei</label>
            <input
              value={props.room.name}
              onChange={(e) =>
                props.setData({ ...props.room, name: e.target.value })
              }
            />
            <label>Paturi</label>
            <input
              type="number"
              min="1"
              required
              value={props.room.slots}
              onChange={(e) =>
                props.setData({ ...props.room, slots: e.target.value })
              }
            />
            <label>Tipul</label>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={props.room.type}
              label="Type"
              onChange={(e) =>
                props.setData({ ...props.room, type: e.target.value })
              }
              style={{marginBottom:'20px'}}
            >
              {RoomTypes.map((item, index) => {
                return (
                  <MenuItem key={index} value={item.capsName}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
            <ReactImageFileToBase64 
              multiple={false}
              onCompleted={handleCompleted}
            />
            {props.room.img && (
              <img
              src={props.room.img} alt=""
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

export default EditRoomModal;
