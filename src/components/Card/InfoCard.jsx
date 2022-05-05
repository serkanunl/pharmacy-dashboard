import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";


const InfoCard = ({icon, title, subtitle, color, actionText}) => {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: 275,
        border: "1px solid" + color,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        {icon}
        <Typography variant="h2">{title}</Typography>
        <Typography variant="h3">{subtitle}</Typography>
      </CardContent>

      <CardActions
        sx={{
          alignSelf: "bottom",
          width: "100%",
          justifyContent: "center",
          padding: 0,
          borderTop: "1px solid " + color,
          backgroundColor: color + "4C",
          color: "#000",
        }}
      >
        <Button variant="text" size="small" sx={{flex:1, color: "#1D242E", textTransform: 'none'}}>
          {actionText + " >>"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default InfoCard;
