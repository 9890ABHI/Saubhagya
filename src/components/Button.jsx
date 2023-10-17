import { Button } from "@mui/material";
import React from "react";

export const ShoppingButton = ({ title, icon }) => {
  return (
    <>
      <Button
        sx={{
          backgroundColor: "#eee",
          color: "#000",
          fontSize: "15px",
          "&:hover": {
            backgroundColor: "#000",
            color: "#eee",
          },
          px: 7,
          py: 2,
          borderRadius: 2,
          gap: 2,
        }}
        variant="contained"
        startIcon={icon}
      >
        {title}
      </Button>
    </>
  );
};
