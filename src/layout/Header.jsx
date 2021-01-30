import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = (props) => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Hunter ACM</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
