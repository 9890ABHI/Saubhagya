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
import { Addresses, Logins, Orders } from "./components/account/Orders";
import BuyNow from "./screens/BuyNow";
import { AboutUs, ContactUs } from "./components/footer/AboutUs";
import { PrivacyPolicies, ReturnPolicies, ShippingPolicies } from "./components/footer/PrivacyPolicies";
import BottomBar from "./components/BottomBar";
import Payments from "./screens/Payments";
import PageNotFound from "./screens/PageNotFound";
import TermsandCondition from "./components/footer/TermandCondition";
import Deatils from "./components/account/Deatils";

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
        className="bg-[#f2f2f2]"
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
                <Route path="/buynow" element={<BuyNow />} />
                <Route path="/account" element={<Deatils />} />
                <Route path="/payments" element={<Payments />} />
            <>
            <Route path="/orders" element={<Orders />} />
            <Route path="/logins" element={<Logins />} />
            <Route path="/addresses" element={<Addresses />} />
            </>
              </>
            )}
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/privacypolicies" element={<PrivacyPolicies />} />
            <Route path="/termsandcondition" element={<TermsandCondition />} />
            <Route path="/returnpolicies" element={<ReturnPolicies />} />
            <Route path="/shippingpolicies" element={<ShippingPolicies />} />
            <Route path="*" element={<PageNotFound />} />
            {/* <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<Details />} />
            <Route path="/cart/:userid" element={<Cart />} /> */}

          </Routes>
        </StyledEngineProvider>
        <BottomBar />
        <Footer />
      </div>
    </>
  );
}

export default App;
