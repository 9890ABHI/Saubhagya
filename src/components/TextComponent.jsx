import { Typography } from "@mui/material";
import React from "react";

export const PrimaryText = ({ text, isInfo }) => {
  return (
    <>
      <Typography
        variant={isInfo ? "subtitle1" : "body1"}
        className="font-semibold"
      >
        {text}
      </Typography>
    </>
  );
};

export const SecondaryText = ({ text, isInfo }) => (
  <>
    <Typography variant={isInfo ? "body1" : "body2"}>{text}</Typography>
  </>
);
