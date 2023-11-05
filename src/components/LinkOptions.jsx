import {  Typography } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const LinkOptions = ({ title, icon, link ,setCount ,id }) => {
  const Icons = icon;
  const location = useLocation()
  console.log(location.pathname);

  return (
    <>
      <Link to={link} className="flex w-fit flex-col justify-center items-center rounded-t-xl rounded-tr-xl" style={{
        //  backgroundColor:location.pathname === link ? '#f2f' : "",
         marginBottom:location.pathname === link ? 2 : 0
      }} onClick={() => setCount(id)}>
        {/* <IconButton className="flex flex-col w-[50px] h-[50px]" sx={{
          backgroundColor:location.pathname === link ? '#f2f' : "",
          mb:location.pathname === link ? 1 : 0
          
        }}> */}
          <Icons sx={{ color: location.pathname === link ?'#eee' : "#000", marginBottom: -1, mt: 1 }} />
          <Typography variant="button" className="pt-2" sx={{color: location.pathname === link ?'#eee' : "#000"}} >{title}</Typography>
        {/* </IconButton> */}
      </Link>
    </>
  );
};

export default LinkOptions;
