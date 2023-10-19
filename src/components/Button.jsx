import { Button } from "@mui/material";
import React from "react";

export const ShoppingButton = ({ title, icon }) => {
  return (
    <>
      <Button
        sx={{
          color: "#000",
          fontSize: "15px",
          ":hover": {
            color: "#eee",
          },
          px: 7,
          py: 2,
          borderRadius: 2,
          gap: 2,
          "&.MuiButton-root": {
            background: "linear-gradient(to left,  #f88b69, #f7797d)",
          },
        }}
        variant="contained"
        startIcon={icon}
      >
        {title}
      </Button>
    </>
  );
};
