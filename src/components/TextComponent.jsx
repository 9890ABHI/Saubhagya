import { Typography } from "@mui/material";
import React from "react";

export const PrimaryText = ({ text }) => {
  return (
    <>
      <Typography variant="body1" className="font-semibold">
        {text}
      </Typography>
    </>
  );
};

export const SecondaryText = ({ text }) => (
  <>
    <Typography variant="body2">{text}</Typography>
  </>
);
