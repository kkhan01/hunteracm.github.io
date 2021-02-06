import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#2F3136",
    alignItems: "center",
    padding: theme.spacing(1),
  },
}));

// TODO: this is not robust yet
// it should utilize site metadata for display message
// possibly utilize snackbars for future community messages
const StatusBar = (props) => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.root} position="relative">
        <Typography variant="body2">
          This site is in alpha and a work in progress.
        </Typography>
      </AppBar>
    </>
  );
};

export default StatusBar;
