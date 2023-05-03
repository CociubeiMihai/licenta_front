import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import room from "../../../../images/room.jpg";
import "./ChoesePersonsModalStyle.css";

function RoomCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={room}
          alt="green iguana"
        />
        <CardContent className="card-content">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="titlu-card"
          >
            {props.data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className="buttons-div">
          <button onClick={() => props.submit(props.data)} >Choose</button>
        </div>
      </CardActions>
    </Card>
  );
}

export default RoomCard;
