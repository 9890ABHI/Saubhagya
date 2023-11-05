import { Box, Typography } from "@mui/material";
import React from "react";

const CategoryCard = ({title,
  icon,
  id,
  iconActive,
  // handleActive,
  active,
  setActive,setCategoryInfo , item }) => {
  return (
    <>
    
    <Box
      className={`w-[70px] h-[70px] flex flex-col justify-center items-center   ${
        active === id ? "bg-[#efbebe] rounded-tr-md rounded-br-md" : "bg-[#a88585]" } ${ active - 1 === id ? "rounded-br-md" : undefined} ${ active + 1 === id ? "rounded-tr-md" : undefined}`}
      onClick={() => {
        setActive(id)
        setCategoryInfo(item.details)
      }}
      >
      <Box className={`${active === id ? "text-gray-100" : 'text-gray-600'}`}>
        {/* <img src={require("../assets/logo.png")} alt="" className="w-[45px] h-[45px] object-contain" /> */}
        {
          active === id ? iconActive : icon
        }
      </Box>
      <Box>
<Typography className={`${active === id ? "text-white" : 'text-gray-800'}`}> 

        {title}
</Typography>
      </Box>
      
    </Box>
      </>
  );
};

export default CategoryCard;
