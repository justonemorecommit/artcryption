import Layout from "./Components/Layout";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import FeaturedCurators from "./Containers/FeaturedCurators";
import { Typography } from "@material-ui/core";

import "./App.css";

const theme = createTheme({
  palette: {
    primary: { main: "#000" },
    secondary: { main: "#BAE5F8" },
  },
  typography: {
    fontFamily: `Inter, "Helvetica", "Arial", sans-serif`,
    button: {
      textTransform: "none",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/featured-curators" element={<FeaturedCurators />} />
            <Route
              path="/meta-data"
              element={<Typography>Meta data page</Typography>}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
