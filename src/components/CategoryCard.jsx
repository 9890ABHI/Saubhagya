import { Box } from "@mui/material";
import React from "react";

const CategoryCard = ({ active }) => {
  return (
    <Box
      className={`w-[50px] h-[50px]  rounded-tr-md rounded-br-md ${
        active ? "bg-[#f2f2f2]" : "bg-transparent"
      } `}
    >
<Box>cards</Box>
    </Box>
  );
};

export default CategoryCard;
