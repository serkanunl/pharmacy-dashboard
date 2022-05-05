import { Box, Card, Typography, Divider } from "@mui/material";
import React from "react";

const ReportCard = ({ title, rightTitleText, leftContent, rightContent }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flex:1,
        flexDirection: "column",
        minWidth: 450,
        border: "1px solid black",
        boxShadow: "none",
      }}
    >
      <Box p={2} sx={{ display: "flex",  justifyContent: "space-between" }}>
        <Typography variant="h3">{title}</Typography>
        <Typography>{rightTitleText + "  >>"}</Typography>
      </Box>
      <Divider />
      <Box p={2} sx={{ display: "flex", justifyContent: "space-between" }}>
        {leftContent}
        {rightContent}
      </Box>
    </Card>
  );
};

export default ReportCard;
