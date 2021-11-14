import Layout from "./Components/Layout";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import FeaturedCurators from "./Containers/FeaturedCurators";

const theme = createTheme({
  palette: {
    primary: { main: "#000" },
    secondary: { main: "#BAE5F8" },
  },
  typography: {
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
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
