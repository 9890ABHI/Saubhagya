
import { ArrowBack } from "@mui/icons-material";
import {  Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingButton = ({ title, icon, sizes , onClick }) => {
  
  const Mobile = useMediaQuery("(max-width: 640px)");
  return (
    <>
      <Button
      onClick={ onClick}
        sx={Mobile ? {
          color: "#fff",
          fontSize: 10,
          ":hover": {
            color: "#000",
            "&.MuiButton-root": {
              // background: "linear-gradient(to right,  #c90f72, #c90f7270)",
              backgroundColor: "#c90f72",
            },

          },
          width: sizes ? "100%" : undefined,
          px: 5,
          py: 2,
          borderRadius: sizes ? 0 : 2,
          gap: 1,
          "&.MuiButton-root": {
            // background: "linear-gradient(to right,  #c90f72, #c90f7290)",
            backgroundColor: "#c90f72",
          },
          display: "flex",
          alignItems: "center",
        } : {
          color: "#fff",
          fontSize: sizes ? "13px" : "15px",
          ":hover": {
            color: "#000",
            "&.MuiButton-root": {
              background: "linear-gradient(to right,  #c90f72, #c90f7270)",
            },

          },
          width: sizes ? "100%" : undefined,
          px: sizes ? null : 8,
          py: sizes ? "5px" : 2,
          borderRadius: sizes ? 0 : 2,
          gap: 2,
          "&.MuiButton-root": {
            background: "linear-gradient(to right,  #c90f72, #c90f7290)",
            backgroundColor: "#c90f72",
          },
          display: "flex",
          alignItems: "center",

        }}
        variant="contained"
        startIcon={icon}
      >
        {title}
      </Button>
    </>
  );
};

export const QuantityButtton = (id) => {
  return (
    <>
      {/* <Box>
        <Button onClick={() => AddItem(item.id)}>
          <Remove />
        </Button>
        {quantity}
        <Button onClick={() => setQuantity(quantity + 1)}>
          <Add />
        </Button>
      </Box> */}
    </>
  );
};


export const BackButton = () => {
  const Navigate = useNavigate() 
  return(
    <>
     <Box className="absolute top-[72px] hidden max-sm:flex  left-5  justify-items-center bg-[#fff] rounded-md px-2 py-2 shadow-md">
<ArrowBack onClick={() => Navigate(-1)}  />
  </Box>
    </>
  )
}