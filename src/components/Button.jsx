import { Add, Remove } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";

export const ShoppingButton = ({ title, icon, sizes }) => {
  return (
    <>
      <Button
        sx={{
          color: "#000",
          fontSize: sizes ? "13px" : "15px",
          ":hover": {
            color: "#eee",
          },
          width: sizes ? "100%" : undefined,
          px: sizes ? null : 8,
          py: sizes ? "5px" : 2,
          borderRadius: sizes ? 0 : 2,
          gap: 2,
          "&.MuiButton-root": {
            background: "linear-gradient(to left,  #f88b69, #f7797d)",
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
