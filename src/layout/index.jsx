import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import StatusBar from "./StatusBar";
import Header from "./Header";

const Index = ({ children, title }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <StatusBar />
      <Header />
      <Container>
        <Box my={2}>{children}</Box>
      </Container>
    </React.Fragment>
  );
};

export default Index;
