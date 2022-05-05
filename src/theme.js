import { alpha, createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiButtonBase:{
      defaultProps: {
        // The props to apply
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiListItemButton: {

      styleOverrides: {
        root: ({ theme }) => ({
          "&.Mui-selected": {
            backgroundColor: theme.palette.primary.main,
            "&:hover": {
              backgroundColor: alpha(theme.palette.primary.main, 0.9),
            },
          },
          "&:hover": {
            backgroundColor: alpha(theme.palette.primary.main, 0.1),
          },
        }),
      },
    },
  },
  typography: {
    
    h2:{
      color:"#1D242E",
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h3:{
      color:"#1D242E",
      fontSize: 18,
      fontWeight: 500,
    },
    h4:{
      color:"#1D242E",
      fontSize: 16,
      fontWeight: 500,
    },
    h5: {
      color:"#1D242E",
      fontSize: 16,
    },
    h6:{
      color:"#1D242E",
      fontSize: 14,
      fontWeight: 400,
    },
    subtitle1: {
      color:"#1D242E",
      fontSize: 12,
      letterSpacing: 0,
      fontWeight: 300,
    },
  },

  palette: {
    primary: {
      main: "#009099",
    },
    secondary: {
      main: "#ff4081",
    },
    gray:{
      main: "#f5f5f5",
    },
    lightBlue:{
      main:"#F7FAFD"
    }
  },
});
