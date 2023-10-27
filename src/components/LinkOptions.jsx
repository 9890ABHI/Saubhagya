import { IconButton, Typography } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const LinkOptions = ({ title, icon, link }) => {
  const Icons = icon;
  const location = useLocation()
  console.log(location.pathname);

  return (
    <>
      <Link to={link}>
        <IconButton className="flex flex-col">
          <Icons sx={{ color: "#000", marginBottom: -1, mt: 1 }} />
          <Typography variant="overline">{title}</Typography>
        </IconButton>
      </Link>
    </>
  );
};

export default LinkOptions;
