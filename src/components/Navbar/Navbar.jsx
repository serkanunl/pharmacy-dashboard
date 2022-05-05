import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import TranslateIcon from "@mui/icons-material/Translate";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DateTime from "./DateTime";

const Search = styled("div")(() => ({
  position: "relative",
  borderRadius: 4,
  backgroundColor: "#E3EBF3",
  "&:hover": {
    backgroundColor: "#E8F0F8",
  },
  marginRight: 2,
  marginLeft: 0,
  width: "auto",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  right: 4,
  top: 0,
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(() => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em )`,
    transition: "width 0.3s ease-out",
    width: "100%",
  },
}));

const Navbar = () => {
  return (
    <AppBar position="relative" color="lightBlue" elevation={1}>
      <Toolbar>
        <Box sx={{ flexGrow: 2 }}>
          <Search>
            <StyledInputBase
              placeholder="Search for anything here..."
              inputProps={{ "aria-label": "search" }}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
        </Box>
        <Box sx={{ flexGrow: 4 }} />
        <Box sx={{ display: "flex", gap: 1 }}>
          <TranslateIcon />
          <Typography variant="h5">English (US) v</Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <WbSunnyIcon sx={{ color: "orange" }} />
            <Typography variant="h4">Good Morning</Typography>
          </Box>
          <DateTime/>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
