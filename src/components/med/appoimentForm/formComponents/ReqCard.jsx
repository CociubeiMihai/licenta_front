import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import room from "../../../../images/room.jpg";
import "./ChoesePersonsModalStyle.css";

function ReqCard(props) {
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
            Patieint {props.data.appUser.firstName} 
             {props.data.appUser.lastName !==  null && props.data.appUser.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Data convenabila <strong>{props.data.data}</strong> <br/>
            Diagnosticul trecut <strong> {props.data.diagnostic} </strong> <br/>
            Febră: 
            <strong>
            {props.data.febra ? "Da" : "Nu"}</strong><br/>
            Contagios:
            <strong>
            {props.data.contagios ? "Da " : "Nu"}</strong>
            <br/>
            Boala de care sufăr
            <strong>
            {props.data.disease === null ? " nu este clară" : " " + props.data.disease.description}
            </strong>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className= "button-div">
          <button onClick={() => props.submit(props.data)} > Rezolvă cererea</button>
        </div>
      </CardActions>
    </Card>
  );
}

export default ReqCard;
