import { Container } from "@mui/system";
import { CssBaseline, Box } from "@mui/material";
import { ThemeProvider, useTheme } from "@emotion/react";

import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <Container component="main" maxWidth="xl" sx={{ flex: 1, my: 5 }}>
          {children}
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;