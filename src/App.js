import { StyledEngineProvider } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import Shop from "./components/Shop";

function App() {
  return (
    <>
      <div style={{ width: "100vw" }} className="App">
        <Header />
        <StyledEngineProvider injectFirst>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </StyledEngineProvider>
        <Footer />
      </div>
    </>
  );
}

export default App;
