import { createMuiTheme } from "@material-ui/core/styles";

export const theme = {
  palette: {
    primary: {
      light: "#773486",
      main: "#480259",
      dark: "#230030",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffe95d",
      main: "#f9b726",
      dark: "#c18700",
      contrastText: "#fff",
    },
    background: {
      default: "#E1E2E1",
    },
  },
};

export default createMuiTheme(theme);
