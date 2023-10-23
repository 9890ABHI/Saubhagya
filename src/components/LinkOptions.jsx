import { IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LinkOptions = ({ title, icon, link }) => {
  const Icons = icon;
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
