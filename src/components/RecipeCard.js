import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./ComponentStyle.css";
import { Link } from "react-router-dom";
export default function RecipeCard(props) {
  console.log("props: ", props);
  return (
    <Card sx={{ maxWidth: 345, margin: "10px" }}>
      <CardHeader title={props.recipename} />
      <CardMedia
        component="img"
        height="194"
        image="/images/img.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <div className="viewbtn-container" style={{ textAlign: "center" }}>
        <Link to={`/DisplayRecipe/${props.eventid}`}>
        <button className="viewbtn" style={{ margin: "10px" }}>
          View
        </button>
        </Link>
      </div>
    </Card>
  );
}
