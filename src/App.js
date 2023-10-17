import { StyledEngineProvider } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import Shop from "./components/Shop";
import Details from "./screens/Details";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import { useSelector } from "react-redux";
import React from "react";

function App() {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;
  return (
    <>
      <div style={{ width: "100vw" }} className="App">
        <Header />
        <StyledEngineProvider injectFirst>
          <Routes>
            {!authUser ? <></> : <></>}
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<Details />} />
          </Routes>
        </StyledEngineProvider>
        <Footer />
      </div>
    </>
  );
}

export default App;
