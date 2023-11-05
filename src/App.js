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
import Cart from "./screens/Cart";
import Account from "./screens/Account";
import { Logins, Orders, Payments } from "./components/account/Orders";
import BuyNow from "./screens/BuyNow";
import { AboutUs, ContactUs } from "./components/footer/AboutUs";
import { PrivacyPolicies, ReturnPolicies } from "./components/footer/PrivacyPolicies";

function App() {
  const user = useSelector((state) => state.auth.user);
  // console.log(user);

  return (
    <>
      <div
        style={{
          width: "screen",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
        // className="App"
      >
        <Header />
        <StyledEngineProvider injectFirst>
          <Routes>
            {!user ? (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:id" element={<Details />} />
              </>
            ) : (
              <>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:id" element={<Details />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/buynow/:id" element={<BuyNow />} />
                <Route path="/account" element={<Account />} />
            <>
            <Route path="/orders" element={<Orders />} />
            <Route path="/logins" element={<Logins />} />
            <Route path="/payments" element={<Payments />} />
            </>
              </>
            )}
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/privacypolicies" element={<PrivacyPolicies />} />
            <Route path="/returnolicies" element={<ReturnPolicies />} />
            {/* <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<Details />} />
            <Route path="/cart/:userid" element={<Cart />} /> */}

          </Routes>
        </StyledEngineProvider>
        <Footer />
      </div>
    </>
  );
}

export default App;
