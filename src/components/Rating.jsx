import { Box, Rating, Typography } from "@mui/material";
import React from "react";

export const Ratings = ({ product }) => {
  return (
    <>
      <Box className="flex items-center gap-3 justify-center">
        <Typography className="text-base ">{product}</Typography>
        <Rating readOnly value={product} size="small" precision={0.1} />
        <Typography>31 rating</Typography>
      </Box>
    </>
  );
};
