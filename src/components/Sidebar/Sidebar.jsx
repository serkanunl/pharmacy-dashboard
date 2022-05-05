import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import VaccinesOutlinedIcon from "@mui/icons-material/VaccinesOutlined";
import MoreVert from "@mui/icons-material/MoreVert";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { useState } from "react";

const data = [
  [
    { icon: <DashboardOutlinedIcon />, label: "Dashboard" },
    { icon: <Inventory2OutlinedIcon />, label: "Inventory" },
    { icon: <BarChartOutlinedIcon />, label: "Reports" },
    { icon: <TuneOutlinedIcon />, label: "Configuration" },
  ],
];

const menuData = [
  [{ icon: <AccountCircleOutlinedIcon />, label: "My Profile" }],
  [{ icon: <LogoutOutlinedIcon />, label: "Logout" }],
];

const PharmaNav = styled(List)({
  "& .MuiListItemButton-root": {
    padding: 17,
    paddingLeft: 16,
    backgroundColor: "#1D242E",
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 30,
  },
});

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openPrifileMenu = (e) => {
    setAnchorEl(e.target);
  };
  const closePrifileMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          height: "100vh",
        }}
        flex={0.18}
        bgcolor="#283342"
      >
        <PharmaNav component="nav" disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon sx={{ fontSize: 20 }}>
              <VaccinesOutlinedIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              sx={{ my: 0 }}
              primary="Pharmacy"
              primaryTypographyProps={{
                color: "white",
                fontSize: 20,
                fontWeight: "medium",
                letterSpacing: 0,
              }}
            ></ListItemText>
          </ListItemButton>
        </PharmaNav>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            p: 2,
            pt: 3,
            pb: 3,
          }}
        >
          <Avatar alt="User Avatar" src="" />
          <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
            <Typography conponent="div" variant="h5" color="white">
              John
            </Typography>
            <Typography conponent="div" variant="subtitle1" color="#FED600">
              Super Admin
            </Typography>
          </Box>
          <IconButton
            onClick={(e) => {
              openPrifileMenu(e);
            }}
          >
            <MoreVert sx={{ color: "white" }}></MoreVert>
          </IconButton>
        </Box>
        <Divider />
        {data.map((group) => {
          return group.map((item, index) => (
            <ListItemButton
              key={item.label}
              selected={index === 0}
              sx={{ minHeight: 32, maxHeight: 46, gap: 1, color: "white" }}
            >
              <ListItemIcon
                variant="span"
                sx={{ color: "inherit", minWidth: "auto" }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontSize: 16, fontWeight: "medium" }}
              />
            </ListItemButton>
          ));
        })}
        <Box sx={{ flex: 1 }} />
        <Typography
          p={1}
          variant="h6"
          align="center"
          sx={{ backgroundColor: "#1D242E", color: "#ffffff90" }}
        >
          Powered by Serkan 2022
        </Typography>
      </Box>
      <ProfileMenu
        anchorEl={anchorEl}
        items={menuData}
        handleClose={closePrifileMenu}
      ></ProfileMenu>
    </>
  );
};

export default Sidebar;
