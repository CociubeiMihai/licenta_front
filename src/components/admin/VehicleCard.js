import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

function VehicleCard(props) {
  return (
    <Card className= {props.chosen ? "card" : ""}  sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          style={{height:'230px', width:'345px'}}
          image={props.image}
          alt="green iguana"
        />
        <CardContent className="card-content">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="titlu-card"
          >
            {props.data.nume}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className={props.chosen ? "button-div-chosen" : "button-div"}>
          <button onClick={() => props.submit(props.data)} >{props.modify ? "Modifica" : props.chosen ? "Camera selectata" : "Selecteaza" }  </button>
        </div>
      </CardActions>
    </Card>
  );
}

export default VehicleCard;
