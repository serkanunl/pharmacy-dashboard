import { Menu, MenuItem, Divider, ListItemIcon } from "@mui/material";

const ProfileMenu = ({ id, anchorEl, items, handleClose }) => {
  return (
    <Menu
      id={id || "profile-menu"}
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          mt: 1.5,
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 7,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {items?.map((group, index) => {
        return (
          <div key={index}>
            {group.map((item) => (
              <MenuItem key={item.label}>
                <ListItemIcon>{item.icon}</ListItemIcon>

                {item.label}
              </MenuItem>
            ))}
            {index !== items.length - 1 && <Divider />}
          </div>
        );
      })}
    </Menu>
  );
};

export default ProfileMenu;
