import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const DateTime = () => {
  const [date, setDate] = useState();
  const [clock, setClock] = useState();
  useEffect(() => {
    setInterval(() => {
        const d = new Date();
        setDate(d.toLocaleDateString('en-UK', {year:"numeric", month:"long", day:"numeric"}));
        setClock(d.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Typography variant="h6">{date}</Typography>
      <Typography variant="h6">{clock}</Typography>

    </Box>
  );
};

export default DateTime;
