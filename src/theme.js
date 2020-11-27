import { createMuiTheme } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";

const ACCENT = "#FDBF5A";
const ACCENT_HOVER = "#FFA842";
const TEXT = "#1C1A19";
const GRAY = "#7B7B7B";
// $gray: #828282;
// $grayLight: #e4e4e4;

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: TEXT,
    },
    secondary: {
      main: ACCENT,
    },
  },
  shape: {
    borderRadius: 20,
  },
  status: {
    danger: orange[500],
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          fontSize: "21px",
          fontWeight: 400,
          width: "100%",
          backgroundColor: ACCENT,
        },
        textPrimary: {
          "&:hover": {
            backgroundColor: ACCENT_HOVER,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "90px",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: 30,
          width: "100%",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            fontWeight: 700,
            fontSize: 16,
          },
        },
      },
    },
  },
  typography: {
    subtitle1: {
      fontSize: 18,
      color: GRAY,
      marginBottom: 20,
    },
    h1: {
      fontSize: 32,
      fontWeight: 700,
      marginBottom: 20,
      // "@media (min-width:600px)": {
      //   fontSize: "1.5rem",
      // },
      //   [createMuiTheme.breakpoints.up('md')]: {
      //     fontSize: '2.4rem',
      //   },
    },
  },
});
