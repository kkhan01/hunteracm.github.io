import { createMuiTheme } from "@material-ui/core/styles";

export const theme = {
  palette: {
    primary: {
      light: "#773486",
      main: "#480259",
      dark: "#230030",
    },
    secondary: {
      light: "#ffe95d",
      main: "#f9b726",
      dark: "#c18700",
    },
    background: {
      default: "#ffffff",
    },
  },
};

export default createMuiTheme(theme);
