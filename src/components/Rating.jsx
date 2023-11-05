import { Person2Outlined } from "@mui/icons-material";
import { Box, Rating, Typography } from "@mui/material";
import React from "react";

export const Ratings = ({ product, ratings , gap }) => {
  return (
    <>
      <Box className={`flex items-center ${gap ? 'gap-1' :  'gap-3 justify-center'} `}>
        <Typography className="text-base ">{product}</Typography>
        <Rating readOnly value={product} size="small" precision={0.1} />
        {
          !gap && <>
          <Typography className="flex">{ratings}<Typography className="max-sm:hidden">
            rating
            </Typography> 
            <Person2Outlined className="md:hidden pl-1"  />
            </Typography> 
          </>
        }
      </Box>
    </>
  );
};
